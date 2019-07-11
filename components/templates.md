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

```bash
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

```bash
@extend('maelstrom::layouts.basic', [
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

@section('title')
    Weekly Reports
@endsection
```

::: warning
You must provide a `title` before the breadcrumbs will appear.
:::

### Index

We also provide a pre-loaded template `maelstrom::layouts.index` for the `index` method to display the listing of entries. This is what most Panels will be able to use.

This includes everything from `maelstrom.layouts.basic` plus:

- A `buttons` slot to include your own buttons e.g. Create / Export etc
- The `content` slot
- A `footer` slot

If you do not provide a `content` slot then it will fallback to adding `@include('maelstrom::components.table')` which will look for a global `$entries` and `$columns` which can be set via `$this->panel->setTableHeadings()` and `$this->panel->getEntries()` (see more on the Panel API)

```php
class PageController
{
    public function __construct()
    {
        $this->panel = maelstrom(Page::class)->setTableHeadings([[
             'label' => 'Name',
             'name' => 'name'
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

```bash
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

The form template is the most complicated as it will house all your fields, tabs, repeaters etc.

Again it's very similar to the `maelstrom::layouts.basic` however it has no default `content`

It does have some additional slots which can be used for some basic use cases.

- `form_before` to display content before the form.
- `form_after` to display content after the form.
- `footer` to display content in the footer.

Once you've got your template extending the `maelstrom::layouts.form` template you will still need to use the `content` slot and pass in the [form component.](./the-form.md)

```bash
@extend('maelstrom::layouts.form')

@section('content')

    @component('maelstrom::components.form', [
        'action' => $action, // route('pages.create')
        'method' => $emthod, // POST
    ])
    
        @include('maelstrom::inputs.text', [
            'name' => 'page_name',
            'label' => 'Page Name',
        ])
    
    @endcomponent

@endsection
``` 

::: tip
As both `$action` and `$method` can change between `create` and `update` it's best to pass these down from the controller method.
:::

### Edit Profile

We also have a simple template for editing your account information `maelstrom::templates.edit-account`. You can read more about this in the [documentation.](./edit-profile.md)
