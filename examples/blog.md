# Creating a Basic Blog

This tutorial will go through every step to create a fully functioning backend for a blog with tags and categories as a brand new project.

::: warning
Your system paths and setup may differ, please take what you see with a pinch of salt and adjust where needed.
:::

### Creating The Project

```bash
cd ~/Sites
composer create-project laravel/laravel ./blogstrom
cd ./blogstrom
valet link
php artisan make:auth
php artisan storage:link
npm install
npm run dev
```

This should get you setup with a clean Laravel installation, you'll now need to edit the `.env` to update your settings.

::: danger
Make sure you setup your database and `APP_URL` before you continue.
:::

Now when I visit `http://blogstrom.dev` I see the default Laravel page, You can then click the Register button and create yourself account for ease.

### Installing Maelstrom

```bash
composer require maelstrom-cms/toolkit
npm install @maelstrom-cms/toolkit
rm -f webpack.mix.js
php artisan vendor:publish --tag=maelstrom-stubs
php artisan vendor:publish --tag=maelstrom-config
npm run dev
php artisan migrate
```

You can confirm Maelstrom is installed by typing `php artisan route:list | grep "maelstrom"` and you should see some routes.

### Creating Models

We're going to need 2 models

1. Post
2. Category

```bash
php artisan make:model Post -m
php artisan make:model Category -m
```

We can now setup the database for them by editing the generated migrations e.g.

```php
Schema::create('posts', function (Blueprint $table) {
    $table->bigIncrements('id');
    $table->string('name');
    $table->string('slug');
    $table->string('image');
    $table->longText('body');
    $table->boolean('is_sticky')->default(0);
    $table->bigInteger('category_id');
    $table->json('tags')->nullable();
    $table->softDeletes();
    $table->timestamps();
});
```

and

```php
Schema::create('categories', function (Blueprint $table) {
    $table->bigIncrements('id');
    $table->string('name');
    $table->softDeletes();
    $table->timestamps();
});
```

We then need to add the `SoftDeletes` trait to the models to enable the trash.

```php
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;
}
```

and

```php
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;
}
```

We can now run these migrations with `php artisan migrate`

### Creating the Category Panel

Firstly we'll the controller and the routes needed.

```bash
php artisan make:controller Admin\\CategoryController -r -m Category
```

This will give us `app/Http/Controllers/Admin/CategoryController.php` which we can now register as a route in `web.php`

We create a route group with the prefix of `/admin` and protect the route via a login session under the `auth` middleware.

```php
Route::prefix('/admin')->middleware('auth')->group(function () {
   Route::resource('category', 'Admin\CategoryController');
});
```

If that worked, we can now visit `http://blogstrom.dev/admin/category` and you should see a blank page.

#### Our Controller
We can now jump into our controller and scaffold out the panel.

```php
<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use Maelstrom\Panel;
use ReflectionException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
    /**
     * @var Panel
     */
    private $panel;

    public function __construct()
    {
        $this->panel = maelstrom(Category::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $this->panel->setTableHeadings([
            [
                'label' => 'Name',
                'dataIndex' => 'name',
                'searchable' => true,
                'sortable' => true,
                'type' => 'EditLinkColumn'
            ]
        ]);

        return $this->panel->index('admin.category-index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return $this->panel->create('admin.category-form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     * @throws ReflectionException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $this->panel->store($request->get('name') . ' has been created!');

        return $this->panel->redirect('edit');
    }

    /**
     * Display the specified resource.
     *
     * @param Category $category
     * @return Response
     */
    public function show(Category $category)
    {
        return redirect()->route('category.edit', $category);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Category $category
     * @return Response
     */
    public function edit(Category $category)
    {
        $this->panel->setEntry($category);

        return $this->panel->edit('admin.category-form');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Category $category
     * @return Response
     * @throws ReflectionException
     */
    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required|max:255'
        ]);

        $this->panel->setEntry($category);

        $this->panel->update($category->name . ' has been updated');

        return $this->panel->redirect('edit');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Category $category
     * @return void
     * @throws \Exception
     */
    public function destroy(Category $category)
    {
        $this->panel->setEntry($category);

        $message = $category->exists() ? ($category->name . ' has been deleted.') : ($category->name . ' has been restored.');

        $this->panel->destroy($message);

        return $this->panel->redirect(
            $category->exists() ? 'edit' : 'index'
        );
    }

    /**
     * Handles the bulk actions from the index table
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function bulk()
    {
        $this->panel->handleBulkActions();

        return $this->panel->redirect('index');
    }
}
```

#### Our Views
Before this will work, we'll also need to create some views for our `index` and `form`, picking a simple convention will help keep this cleaner, I quite like the below.

```bash
mkdir resources/views/admin
touch resources/views/admin/category-form.blade.php
touch resources/views/admin/category-index.blade.php
```

#### The Index 
Firstly we'll focus on our index page, as per the other documentation we can extend the `maelstrom::layouts.index` to get started and quickly create a button to allow adding of new entries.

```bash
@extends('maelstrom::layouts.index')

@section('buttons')
    @include('maelstrom::buttons.button', [
        'url' => route('category.create'),
        'label' => 'Create Category'
    ])
@endsection
```

Now when we visit `http://blogstrom.dev/admin/category` we should see something like

<img src="/blog-1.jpg" class="shadow m-w-full h-auto my-4" style="width: 800px;" />

#### The Form
Now we've got a create button, we should be able to click it and see a new blank page on the url `http://blogstrom.dev/admin/category/create`.

We can now add our form fields, which in this case is only 1 field so very easy!

```bash
@extends('maelstrom::layouts.form')

@section('content')

    @component('maelstrom::components.form', [
        'action' => $action,
        'method' => $method,
    ])

        @include('maelstrom::inputs.text', [
            'label' => 'Category Name',
            'name' => 'name',
            'required' => true,
        ])

    @endcomponent

@endsection
```

<img src="/blog-2.jpg" class="shadow m-w-full h-auto my-4" style="width: 800px;" />

Before you can use the form, you'll need to update your `$fillable` array on the model to allow the fields to be saved.

```php
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;
    
    protected $fillable = ['name'];
}
```

Now you should be able create your first category!

<img src="/blog-3.jpg" class="shadow m-w-full h-auto mt-2 my-4" style="width: 800px;" />

#### Setting Up Bulk Actions

Now we will hook up the `bulk` method earlier to a route so we can access e.g.

```php
Route::post('category/bulk', 'Admin\CategoryController@bulk')->name('category.bulk');
```

The route name should be defined the same as the resource so if the resource is named as `Route::resource('pages')`, then your bulk route should be named `pages.bulk`.

So we should end up with:

```php
Route::prefix('/admin')->middleware('auth')->group(function () {
   Route::resource('category', 'Admin\CategoryController');
   Route::post('category/bulk', 'Admin\CategoryController@bulk')->name('category.bulk');
});
```

We'll now be able to bulk delete delete! Give it a try then access your trash!

<img src="/blog-4.jpg" class="shadow m-w-full h-auto mt-2 my-4" style="width: 800px;" />

When you access the item from the trash you can also restore it from the edit form.

<img src="/blog-5.jpg" class="shadow m-w-full h-auto mt-2 my-4" style="width: 800px;" />

#### Creating a Sidebar

Before this panel is complete, we'll need to add it to the sidebar, we can do this from the `AppServiceProvider.php`.

```php
use Illuminate\Support\Facades\View;

public function boot()
{
    View::share('maelstrom_sidebar', [
        [
            'id' => 'content',
            'label' => 'Content',
            'type' => 'SubMenu',
            'icon' => 'edit',
            'children' => [
                [
                    'id' => 'categories',
                    'label' => 'Categories',
                    'url' => url('/admin/category'),
                    'icon' => 'folder-open',
                ]
            ],
        ],
    ]);
}
```

You should now see your sidebar!

<img src="/blog-6.jpg" class="shadow m-w-full h-auto mt-2 my-4" style="width: 800px;" />

### Creating a Post Panel

We'll start by adding a new item to our sidebar:

```php
public function boot()
{
    View::share('maelstrom_sidebar', [
        [
            'id' => 'content',
            'label' => 'Content',
            'type' => 'SubMenu',
            'icon' => 'edit',
            'children' => [
                [
                    'id' => 'posts',
                    'label' => 'Posts',
                    'url' => url('/admin/posts'),
                    'icon' => 'read',
                ],
                [
                    'id' => 'categories',
                    'label' => 'Categories',
                    'url' => url('/admin/category'),
                    'icon' => 'folder-open',
                ],
            ],
        ],
    ]);
}
```

Then create a controller

```bash
php artisan make:controller Admin\\PostController -r -m Post
```

and add the routes for it

```php
Route::prefix('/admin')->middleware('auth')->group(function () {
   Route::resource('category', 'Admin\CategoryController');
   Route::post('category/bulk', 'Admin\CategoryController@bulk')->name('category.bulk');
   
   Route::resource('post', 'Admin\PostController');
   Route::post('post/bulk', 'Admin\PostController@bulk')->name('post.bulk');
});
```

and then we can start with the same structured controller as the CategoryController

```php
<?php

namespace App\Http\Controllers\Admin;

use App\Post;
use Maelstrom\Panel;
use ReflectionException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    /**
     * @var Panel
     */
    private $panel;

    public function __construct()
    {
        $this->panel = maelstrom(Post::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $this->panel->setTableHeadings([
            [
                'label' => 'Name',
                'dataIndex' => 'name',
                'searchable' => true,
                'sortable' => true,
                'type' => 'EditLinkColumn'
            ]
        ]);

        return $this->panel->index('admin.post-index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return $this->panel->create('admin.post-form');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     * @throws ReflectionException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $this->panel->store($request->get('name') . ' has been created!');

        return $this->panel->redirect('edit');
    }

    /**
     * Display the specified resource.
     *
     * @param Post $post
     * @return Response
     */
    public function show(Post $post)
    {
        return redirect()->route('post.edit', $post);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Post $post
     * @return Response
     */
    public function edit(Post $post)
    {
        $this->panel->setEntry($post);

        return $this->panel->edit('admin.post-form');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param Post $post
     * @return Response
     * @throws ReflectionException
     */
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'name' => 'required|max:255'
        ]);

        $this->panel->setEntry($post);

        $this->panel->update($post->name . ' has been updated');

        return $this->panel->redirect('edit');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Post $post
     * @return void
     * @throws \Exception
     */
    public function destroy(Post $post)
    {
        $this->panel->setEntry($post);

        $message = $post->exists() ? ($post->name . ' has been deleted.') : ($post->name . ' has been restored.');

        $this->panel->destroy($message);

        return $this->panel->redirect(
            $post->exists() ? 'edit' : 'index'
        );
    }

    /**
     * Handles the bulk actions from the index table
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function bulk()
    {
        $this->panel->handleBulkActions();

        return $this->panel->redirect('index');
    }
}
```

Create our views

```bash
touch resources/views/admin/post-form.blade.php
touch resources/views/admin/post-index.blade.php
```

A simple `post-index.blade.php` template:

```bash
@extends('maelstrom::layouts.index')

@section('buttons')
    @include('maelstrom::buttons.button', [
        'url' => route('post.create'),
        'label' => 'Create Post'
    ])
@endsection
```

We're almost ready to move onto building the form - but first we need to configure our model a little

We need to

- Set up the `$fillable`
- Cast our `tags` to an array within `$casts`
- Define our `category` relationship
- Define our `image` relationship

```php
<?php

namespace App;

use Maelstrom\Models\Media;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'slug',
        'image',
        'is_sticky',
        'body',
        'category_id',
        'tags',
    ];

    protected $casts = [
        'tags' => 'array',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function featuredImage()
    {
        return $this->belongsTo(Media::class, 'image');
    }

    public function getFeaturedImageUrlAttribute()
    {
        return optional($this->featuredImage)->cached_thumbnail_url;
    }

}
```
