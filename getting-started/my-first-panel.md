# Creating Your First Panel

Before you can create a panel, you must understand the anatomy of one.

A CRUD style panel is normally made up of 5 components.

[[toc]]

## A Model
To save things, you'll need an Eloquent model.

You can set this up however you like, a really basic one could be created with something like...

```sh
php artisan make:model Page -m 
```

The only requirement for models (if you want to use the update/store helpers) is that you define all your editable fields within the `fillable` property, as we use `Page::getFillable()` for mapping.

```php
class Page extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'body',
        'tags',
        'header_image',
    ];
}
```

## A Controller

Maelstrom allows you to use any sort of controller, however when creating a CRUD style panel it's easiest to use a resourceful one.

You can create this where ever and however you like, we normally just use the artisan command, something like below will be okay!

```sh
php artisan make:controller Admin\\PageController -r -m Page
```

You will then need to flesh out your controller, using our panel helpers.

To start with you need to instantiate an instance of a Panel and bind it to a Model. 

```php
use App\Page;

class PageController extends Controller
{
    protected $panel;
    
    public function __construct()
    {
        $this->panel = maelstrom(Page::class);
    }
    
    //... Other methods omitted for demo purposes.
}
```

Our global helper just uses the IoC container to spin up a new Panel class, If you don't like global helpers then you can do something more like....

```php
use App\Page;
use Maelstrom\Panel;
use Psr\Container\ContainerInterface;

class PageController extends Controller
{
    protected $panel;
    
    public function __construct(ContainerInterface $container)
    {
        $this->panel = $container->makeWith(Panel::class, [
            'model' => Page::class,
        ]);
    }
    
    //... Other methods omitted for demo purposes.
}
```

Now you have your instance of a Maelstrom Panel, you can fill out the other methods.

### The Index/Table Page of Entries

We just need to return our view (which doesn't't yet exist) with an `$entries` variable.

`$entries` you can build yourself, however our helper will apply all filters, transformations, searches, pagination etc.

```php
public function index()
{
    // Vanilla Laravel
    return view('admin.pages-index', [
        'entries' => $this->panel->getEntries(),
    ])
    
    // Using Helpers
    return $this->panel->index('admin.pages-index');
}
```

### The Form to Create New Entries

We must provide a view which will be used for the create form.

You will need to provide an `$action` for the form, usually the store endpoint and a `$method`, this is so the form knows which HTTP Verb to use.

```php
public function create()
{
    // Vanilla Laravel
    return view('admin.pages-form', [
        'action' => route('pages.store'),
        'method' => 'POST',
    ])
    
    // Using Helpers
    return $this->panel->create('admin.pages-form');
}
```

### Storing of Newly Created Entries

We provide a `->store()` method which automatically handles various things such as Uploads, Relationships, Data Mapping, Flash Messages etc.

However if you need a custom `save` method then you're free to do this, just remember to provide a `$flash` message `(['type' => 'success', 'message' => 'saved'])` and return to the edit form.

```php
public function store()
{
    // Vanilla Laravel
    //... Well, we don't really know what you'd want to do here, that's up to you.
    
    return redirect()->route('pages.edit', $page);
    
    // Using Helpers        
    $this->panel->store('Success message here!');
    
    return $this->panel->redirect('edit');
}
```

::: tip
 Validation and permissions can be handled using the native Laravel features. e.g. You can inject a Request class which checks policies to verify if the action is allowed. 
:::

### Displaying an Entry
We think this is a pointless page for a backend, however if you need a page, then you can make one however you like. We just redirect it to the edit form.

```php
public function show(Page $page)
{
    return redirect()->route('pages.edit', $page);
}
```

### Editing an Entry
To edit an entry, you must first provide the Panel with the entry that it will be using.

You can do this various ways e.g. `Page::findOrFail($id)`, as long as you provide the loaded Eloquent model to the method.

We just use the route/model binding system that Laravel provide. 

```php
public function edit(Page $page)
{
    $this->panel->setEntry($page);
    
    // Vanilla Laravel
    return view('admin.pages-form', [
        'action' => route('pages.update'),
        'method' => 'PUT',
    ]);
    
    // Using Helpers
    return $this->panel->edit('admin.pages-form');
}
```

### Updating an Entry

Updating an entry is almost identical to storing one, again you can inject your own custom Validation and Policies if you need.

You can see an example below injecting a custom Request which houses the validation.

```php
public function update(PageRequest $request, Page $page)
{
    $this->panel->setEntry($page);
    
    // Vanilla Laravel
    //... Well, we don't really know what you'd want to do here, that's up to you.
    
    return redirect()->route('pages.edit', $page);
    
    // Using Helpers        
    $this->panel->update('Success message here!');
    
    return $this->panel->redirect('edit');
}
```

### Deleting an Entry

I hope you're starting to spot a pattern here! But deleting is as normal!

(We'll also show you a trick with `SoftDeletes`) in a minute!

```php
public function destroy(Page $page)
{
    // Vanilla Laravel
    $page->delete();
    
    // Using Helpers
    $this->panel->setEntry($page);
    $this->panel->destroy('Success message!');
    
    return $this->panel->redirect('index');
}
```

::: tip
If your model uses `SoftDeletes` then you'll be able to use the `destroy()` method to toggle it's state. e.g.
:::

If you pass through a model through `destroy()` various times, if it uses the `SoftDelete` trait it will check if it's already trashed, if it is, then it will restore it.

We can check the state of the model and provide a suitable success message and redirect location.

```php
public function destroy(Page $page)
{
    $this->panel->setEntry($page);
    
    $message = $page->trashed() ? 'Page restored' : 'Page deleted';
    
    $this->panel->destroy($message);
    
    return $this->panel->redirect($page->exists() ? 'edit' : 'index');
}
```

## A Route

You can manage your routes however you like, including applying middleware or guards to them e.g.

```php
Route::prefix('/admin')->middleware('auth')->group(function () {
    Route::resource('pages', 'Admin\PageController');
});
```

## An Index Template

Our Blade components all use the normal Laravel directives, such as `@include` `@component` etc to give the most flexibility.

The index template is what displays the listing of all your entries, we provide slots and sections to add your UI elements.

The templates are pretty empty to start with, however we can quickly build up an interface. We will extend the `index` layout.

We will add a "create" button and display the table of entries by passing in `$columns` to display. You should be able to pass in the options that the Ant Design table component supports for it's headers [https://ant.design/components/table/](https://ant.design/components/table/).

We provide an additional property for `type` and this takes the name of one of our column types (see column type documentation for more).
   
```php
@extends('maelstrom::layouts.index')

@section('buttons')

    @include('maelstrom::buttons.button', [
        'url' => route('pages.create'),
        'label' => 'Create Page'
    ])
    
@endsection

@section('content')

    @include('maelstrom::components.table', [
        'columns' => [
            [
                'label' => 'Name',
                'dataIndex' => 'page',
                'sortable' => true,
                'type' => 'EditLinkColumn',
                'searchable' => true,
            ],
        ]
    ])
    
@endsection
```

::: tip
Although you can pass in an array of columns to the table component, if you need more advance configuration, you should consider registering it via your controller.
:::

Here we generate some filters for a column based off existing categories

```php
public function index()
{
    return $this->panel->index('admin.pages-index')
    ->with('columns', [
        [
            'label' => 'Name',
            'dataIndex' => 'colour',
            'sortable' => true,
            'type' => 'EditLinkColumn',
            'searchable' => true,
        ],
        [
            'label' => 'Category',
            'dataIndex' => 'category.name',
            'filterMultiple' => false,
            'filters' => Category::all()->map(function ($category) {
                return [
                    'text' => $category->name,
                    'value' => $category->id
                ];
            })
        ],
    ]);
}
```

## A Form Template

Now we have a index page, we can create a form page.

There are many many options for creating forms which you can read about in our other documentation, but here we have a simple example.

```php
@extends('maelstrom::layouts.form')

@section('content')
    @component('maelstrom::components.form', [
        'action' => $action,
        'method' => $method,
    ])
    
        @include('maelstrom::inputs.text', [
            'name' => 'name',
            'label' => 'Post Name',
            'required' => true,
        ])
        
        @include('maelstrom::inputs.text', [
            'name' => 'slug',
            'label' => 'Post Slug',
            'required' => true,
            'html_type' => 'url',
        ])
        
        @include('maelstrom::inputs.wysiwyg', [
            'name' => 'body',
            'label' => 'Post Body',
            'required' => true,
        ])
        
        @include('maelstrom::inputs.tags', [
            'name' => 'tags',
            'label' => 'Tags',
        ])
        
        @include('maelstrom::components.media_manager', [
            'name' => 'header_image',
            'label' => 'Featured Image',
        ])
    
    @endcomponent
    
@endsection
```

### Et Voilà

If all went to plan, you should now be able to access your routes and manage some entities!

You may have realised a lack of navigation, in the next section we'll show you how to setup the sidebar.
