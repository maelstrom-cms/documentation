# Tabs

Tabs are a super helpful way to minimise the amount of data shown at any one time.

<img src="/tab-preview.jpg" alt="Preview of tabs" class="m-w-full h-auto" style="width: 500px;" />

They are controlled by blade components and nesting.

```php
@component('maelstrom::components.tabs')

    @component('maelstrom::components.tab', ['title' => 'First Tab'])
    
        // All your tabs and other content can go here.
    
    @endcomponent
    
    @component('maelstrom::components.tab', ['title' => 'Second Tab'])
        
        // All your tabs and other content can go here.
        
    @endcomponent
    
@endcomponent
```

Each Tab takes a configuration object e.g.

```php
$tab = [
    'title' => 'Home', // Displays on the tab
    'id' => 'tab-1', // If not provided then Str::slug() will run on the title,
    'icon' => 'home', // To display an icon from Ant Icons
    'active' => true, // If this tab should be forced to display
];
```

### Accessing Tabs via the URL

You can easily force / share URLs to specific tabs by adding the number of the tab *(starts from 1 as humans don't start at 0)*

```
https://website.com/admin/pages/create#tab-2
```

### Displaying Errors

Tabs should automatically focus when an error is detected within a tab, when loading it looks for a `.has-error` element.

### Active Priority

The active state on a tab has a certain priority, allowing you to overwrite the active state.

- PHP Prop *(lowest)*
- Error within the tab
- Hash in the URL *(highest)*

This means if you've used PHP to set the active tab to "tab 2" but the URL has got `#tab-3` then Tab 3 will display instead.

### Direction

By default the tabs run horizontally however you can pass in `$direction` of either `horizontal` or `vertical` e.g.

```php
@component('maelstrom::components.tabs', [
    'direction' => 'vertical',
])
```
