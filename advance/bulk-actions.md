# Bulk Actions

We have the ability to apply bulk actions from the index page.

<img src="/bulk-preview.jpg" alt="Preview of search" class="shadow m-w-full h-auto my-4" style="width: 420px;" />

By default we provide the ability for the following:

- Delete selected
- Restore selected
- Permanently delete selected

### Creating a Controller Method

Unfortunately Laravel only has the default controller methods, so you'll need to either create a `BulkActionsController` with methods for each of your panels, or maybe add a `bulk()` method to your controller.

Once you've got a controller method setup you just need to call the bulk actions handler.

```php
public function bulk()
{
    $this->panel->handleBulkActions();
    
    return $this->panel->redirect('index');
}
```

You'll also need to register a `POST` route and name for your bulk actions e.g.

```php
Route::post('admin/pages/bulk', 'PageController@bulk')->name('pages.bulk');
```

You can then globally map the route into your panel - Or you can pass in the route URL to the table component *(scroll down to the last code example)*

```php
$this->panel->routes['bulk'] = route('pages.bulk')
```

### Custom Bulk Actions

Adding custom bulk actions is pretty straight forward, simply call the provided handler first, and if it responds with `false` you know nothing matched.

You can then go on to running what ever logic you wish, you'll have access to 2 variables on the Request class e.g.

- action (what action was selected from the menu)
- selected (an array of primary keys which had been selected)

```php
public function bulk(Request $request)
{
    if ($this->panel->handleBulkActions()) {
        return $this->panel->redirect('index');
    }
    
    //... Your custom logic e.g.
    if ($request->get('action') === 'export') {
        return PageService::export($request->get('selected'));
    }
    
    //... etc
}
```

::: tip
If you need any validation, or to apply permissions, you can inject a custom Request class to handle this.
:::

Once your controller is set up, you'll need to provide these actions to the table component.

Within your index blade template e.g. `admin/pages-index.blade.php` you need to pass in an array of your bulk actions. You can do this however you like, e.g. controller or within your template.

The structure for the `bulk_actions` object has 3 optional properties

- **mode** (this can be merge or overwrite, by default we merge your actions here with our actions)
- **route** (you can pass the bulk actions URL right in here)
- **actions** (an array, with the key being the `action` value and the value being the text label)

```bash
@section('content')
    @include('maelstrom::components.table', [
        'bulk_actions' => [
            'route' => route('bulk-actions.pages'),
            'actions' => [
                'print' => 'Print',
                'export' => 'Export PDF',
            ]
        ],
    ])
@endsection
```

If the user picks `Export PDF` the request to the backend will submit the `$request->action` as `export`
