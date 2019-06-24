# Controllers

The main way you'll interact with the Maelstrom API is via a controller. Of course you can always set it up a similar to Nova e.g. `\App\Maelstrom\User::class` and house all your configurations inside one of these so your controller does less.

### Resourceful Controllers

The easiest way to get started is by using Laravel's [Resourceful Controllers](https://laravel.com/docs/5.8/controllers#resource-controllers)
 
By using these it will help set up your routes and methods ready to go (except for bulk actions which are explained [here](../advance/bulk-actions.md))

The class layout is straight forward and sits very well for usage with Maelstrom, although typically as this toolkit is designed for backends, it's very rare for us to use the `show` method - often we'll use this method to either redirect to the frontend entity or redirect to the edit screen.

The anatomy will normally look something like...

```php
class PageController
{
    // Make it accessible to all the methods.
    public $panel;
    
    public function __construct()
    {
        // First you must make sure you have an instance of the Panel to use along with any configuration
        $this->panel = maelstrom(Page::class)
            ->setNameField('full_name');
    }
    
    public function index()
    {
        // We can return the view which displays all the entries on the table.
        return $this->panel->index('admin.pages-index');
    }
    
    public function create()
    {
        // Then return the view with the form on it 
        return $this->panel->create('admin.pages-form');
    }
    
    public function store()
    {
        // We save the form data to the model
        $this->panel->store('success message');
        
        // Then redirect back to the form / edit screen
        $this->panel->redirect('edit');
    }
    
    public function show(Page $page)
    {
        // We don't need this page, you might :) Feel free to use it!
        return redirect()->route('pages.edit', $page);
    }
    
    public function edit(Page $page)
    {
        // We load the model into the Panel
        $this->panel->setEntry($page);
        
        // We then return the edit form
        return $this->panel->edit('pages.update');
    }
    
    // We can pass in a Request class which has validation on it.
    public function update(PageRequest $request, Page $page)
    {
        // Load up the model once again
        $this->panel->setEntry($page);
        
        // We can now update the attached model with the request data
        $this->panel->update('success message');
        
        // We then redirect back to the form with the success message
        return $this->panel->redirect('edit');
    }
    
    public function destroy(Page $page)
    {
        // You guessed it
        $this->panel->setEntry($page);
        
        // We can delete (or restore if using SoftDeletes)
        $this->panel->destroy('success message');
        
        // Then send them back to the index page
        $this->panel->redirect('index');
    }
    
    // A custom function, can go elsewhere if you like! Maybe a base MaelstromController class?
    public function bulk()
    {
        // Handles our built in bulk actions!
        $this->panel->handleBulkActions();
           
        // Redirect back to the listing page
        return $this->panel->redirect('index');
    }
}
```

::: tip
You can use as many or as little of these as you need, e.g. to create an "Edit Profile" page you can remove things such as the destroy methods, and pass in the authenticated user into setEntry e.g. `$this->panel->setEntry(auth()->user());`
:::

### Service or Factory Class

As mentioned in the opening section of this documentation, you can house your configurations behind a service or factory class e.g. `App\Maelstrom\PagePanelFactory::class`.

```php
<?php

namespace App\Maelstrom;

class PagePanel
{
    public $panel;

    public static function factory()
    {
        return maelstrom(Page::class)
            ->setFilterHandler(function ($filters, $query) {
                return static::handleFilters($filters, $query);
            })
            ->setSearchHandler(function ($search, $query) {
                return static::handleSearch($search, $query);
            })
            ->setEntriesTransformer(function ($entry) {
                return static::transformEntry($entry);
            })
            ->setNameField('first_name')
            ->setEagerLoad([
                // ...
            ])
            ->setRelationships([
                // ...
            ])
            ->setUploadables([
                // ...
            ])
            ->setTableHeadings([
                // ...
            ])
        ;
    }
    
    public static function transformEntry($entry)
    {
        // ...
    }

    public static function handleFilters($filters, $query)
    {
        // ...
    }

    public static function handleSearch()
    {
        // ...
    }
    
    public static function handleBulkActions()
    {
        // ...
    }

    public static function getFormOptions()
    {
        return [
            'categories' => Category::all()->map(function (Category $category) {
                return [
                    'label' => $category->name,
                    'value' => $category->id,
                ];
            }),
            'tags' => Tag::all()->map(function (Tag $category) {
                return [
                    'label' => $category->name,
                    'value' => $category->id,
                ];
            })
        ];
    }
}
```

Then within your controller use that instead!

```php
class PageController
{
    public function __construct()
    {
        $this->panel = PagePanelService::factory();
    }
}
```

### Extending the Panel

You can even extend our `Panel::class` to attach helpers or factory methods e.g.

```php
<?php

namespace App\Maelstrom;

use App\Page;
use Maelstrom\Panel;

class PagePanel extends Panel
{
    public static function factory()
    {
        return maelstrom(Page::class)
            ->setNameField('first_name')
            ->setEagerLoad([
                // ...
            ])
            ->setRelationships([
                // ...
            ])
            ->setUploadables([
                // ...
            ])
            ->setTableHeadings([
                // ...
            ])
        ;
    }
    
    public function applySearchQuery(): Panel
    {
        // ...
    }
    
    public function entryTransformer(): Page
    {
        // ...
    }
}
```

Then again just use that instead!

```php
class PageController
{
    public function __construct()
    {
        $this->panel = app()->make(Page::class);
    }
}
```

::: tip
As you can see, there could easily be plenty of ways to architect your application
:::
