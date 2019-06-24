# Entry Table

The entry table which typically shows from the `index` index method needs a couple of things:

- A list of entries to display
- A configuration of table headings for each column

If you're using the `maelstrom::layouts.index` template to extend from, the table component will automatically search for the global `$entries` and `$columns` variables.

This means you can pass `$columns` in from a controller if you like, or define them inline, both will work!

```php
public function __construct()
{
    $this->panel = maelstrom(Page::class)->setTableHeadings([
        // ... columns all here
    ]);
}

// or

public function index()
{
    return view('admin.pages-index', [
        'entries' => $this->panel->getEntries(),
        'columns' => [
            // ... columns all here
        ],
    ]);
}

// or

public function index()
{
    return $this->panel->index('admin.pages-index')->with('columns', [
        // ... columns all here
    ]);
}

// or

@include('maelstrom::components.table', [
    'columns' => [
        // ... columns here
    ]
]);

// or

@include('maelstrom::components.table', [
    'columns' => PagePanel::columns(),
]);
```

However you pass down `$entries` and `$columns` is up to you! 

### The Entries

The `$entries` array can be collected however you like, we provide a helper method to collect these via `$this->panel->getEntries()` which includes various things such as pagination, filtering, searching etc. So if you're going to do this yourself make sure you include this functionality.

If the data you need for each row doesn't belong directly on the model or isn't in the models serialisation method, then you'll need to define a transformer which will return all the data that the table needs to display what you need.
