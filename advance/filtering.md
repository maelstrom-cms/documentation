# Filtering

Filtering can be a very complex thing, are your filters ANDs? or maybe they're ORs? - We just don't know. And because of this - we provide you with access to the Ant Design filtering system and an API to filter the data yourself to get exactly what you want.

<img src="/filter-preview.jpg" alt="Preview of filters" class="shadow m-w-full h-auto" style="width: 300px;" />

### Frontend

The filtering UI is provided by Ant Designs Table component, you define the `filters` property on your column which contains a `text` value to display to the user and a `value` which is sent to the backend for you to filter on.

```php
$columns = [[
    'title' => 'Category',
    'dataIndex' => 'category.name',
    'filters' => Category::all()->map(function ($category) {
        return [
            'text' => $category->name,
            'value' => $category->id
        ];
    })
]];
```

This will give you some filterable checkboxes within your column.

If you want to disallow multiple filters then use the `filterMultiple` property and set it to `false` to get radio buttons instead.

```php
$columns = [[
    'title' => 'Category',
    'dataIndex' => 'category.name',
    'filterMultiple' => false,
    'filters' => Category::all()->map(function ($category) {
        return [
            'text' => $category->name,
            'value' => $category->id
        ];
    })
]];
```

### Backend 

Within your controller, you're able to attach a filter handler to the Maelstrom Panel. This handler is executed during requests for entries allowing you to manipulate the query before it is executed.

You can define a filter handler using the `setFilterHandler` method which when executed passes you the:

- Applied Filters
- Query Builder Instance
- HTTP Request

You can either do the filtering inline, or maybe defer it to another method.

```php

$this->panel->setFilterHandler(function ($appliedFilters, $queryBuilder, $request) {
    return PageService::filterQuery($appliedFilters, $queryBuilder);
});

```

You can then manipulate the query to adjust your results.

```php
class PageService
{
    public static function filterQuery($filters, $query)
    {
        if (isset($filters->only_active)) {
            $query->where('is_active', 1);
        }
    }
}
```

::: warning
The data structure of the `$filters` object will be different, depending on what type of filters you've used. Make sure your code accounts for this.
:::

Once you've attached your additional logic to the query, the results should now be filtered!

### Custom Handlers on Classes

If you're extending the `Maelstrom\Panel::class` then instead of using the API to define handlers you can define this methods directly on the class e.g.

```php
class PagePanel extends Panel
{
    public function filterHandler()
    {
        // ...
    }
}
```
