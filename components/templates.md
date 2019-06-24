# Templates

We provide some basic templates for you to extend which come pre-bundled with included components to save you some time.

### Wrapper

Every one of our provided templates extends the `maelstrom::layouts.wrapper`.

This acts as a generic framework which includes various smaller components such as

- Page Titles
- Head Meta
- Head Style Sheets
- Header Navigation
- Sidebar Navigation
- Main Content
- Footer Scripts

If you're extending this layout, you're able to populate the content area by pushing a section to the `main` slot e.g.

```php
@extend('maelstrom::layouts.wrapper')

@section('main')
    
    <h1>My Content</h1>
    
    <p>Stuff stuff stuff...</p>
    
@endsection
```

### Basic

If you want a little more guff we also provide a `maelstrom::layouts.basic` template, this also includes

- Heading 1
- Breadcrumbs (optional)
- Loading Animation
- Flash Messages
- Validation Messages

This can be very useful for when building pages such as a dashboard, reports or any other page that needs to look similar to the indexes and forms.

This template extends the `maelstrom::layouts.wrapper` which uses the `main` slot, so because these do not waterfall we have another one for you called `content`.

For this template to work, you will need to pass a `$title` and an optional `$breadcrumbs`.

- The `$title` should just be a string which will act as the page title and heading 1
- The `$breadcrumbs` should follow the same set up as described within our [documentation.](./breadcrumbs.md)

```php
@extend('maelstrom::layouts.basic', [
    'title' => 'Weekly Reports',
    'breadcrumbs' => [
        [
            'label' => 'Reports',
            'url' => route('admin.reports'),
        ],
        [
            'label' => 'Weekly',
        ],
    ]
])
```

### Index

We also provide a pre-loaded template `maelstrom::layouts.index` for the `index` method to display the listing of entries. This is what most Panels will be able to use.

This includes everything from `maelstrom.layouts.basic` plus:

- A `buttons` slot to include your own buttons e.g. Create / Export etc
- The `content` slot
- A `footer` slot

If you do not provide a `content` slot then it will fallback to adding `@include('maelstrom::components.table')` which will look for a global `$entries` and `$columns` which can be set via `$this->panel->setTableHeadings()` and `$this->panel->getEntries()` (see more on the Panel API)

e.g.

```php
class PageController
{
    public function __construct()
    {
        $this->panel = maelstrom(Page::class)->setTableHeadings([[
             'title' => 'Name',
             'dataIndex' => 'name'
         ]])
    }
    
    public function index()
    {   
        return $this->panel->index('admin.pages-index');
        
        // or
        
        return view('admin.pages-index', [
            'entries' => $this->panel->getEntries(),
            'columns' => $this->panel->getTableHeadings(),
        ]);
    }
}
```

```php
// admin/pages-index.blade.php
@extends('maelstrom::layouts.index')

@section('buttons')
    @include('maelstrom::buttons.button', [
        'href' => route('pages.create'),
        'label' => 'Create Page'
    ])
@endsection
```

### Form

### Edit Account
