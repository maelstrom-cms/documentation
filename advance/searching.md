# Searching

By default you're able to use text searches on the immediate model by using a simple `LIKE` query e.g. `LIKE %keyword%`.

This means you cannot search on *(without a custom search handler)*:

- Relationships
- Accessors

### Frontend

<img src="/search-preview.png" alt="Preview of search" class="shadow m-w-full h-auto mt-4" style="width: 420px;" />

### Backend

To mark a column as searchable, set the `searchable` property to `true` e.g.

```php
$columns = [[
    'label' => 'Post Name',
    'dataIndex' => 'name',
    'searchable' => true,
]];
```

### Custom Search Logic

If you need more than the basic `LIKE` searches then you can easily define a custom search handler, which works the same as the filter handler with `setSearchHandler()`

```php
public function __construct()
{
    $this->panel->setSearchHandler(function ($search, $queryBuilder, $filters, $request) {
        return PageService::search($search, $queryBuilder);
    })
}

class PageService
{
    public static function search($search, $query)
    {
        if ($search->column === 'category') {
            $query->whereHas('categories', function ($q) use ($search) {
                $q->where('name', 'like', "%$search->query%")
            });
        }
    }
}
```

::: tip
As long as you add your constraints to the `$query` you can implement this however you see fit.
:::

### Custom Handlers on Classes

If you're extending the `Maelstrom\Panel::class` then instead of using the API to define handlers you can define this methods directly on the class e.g.

```php
class PagePanel extends Panel
{
    public function searchHandler()
    {
        // ...
    }
}
```


### Laravel Scout

If you want to use Laravel Scout instead, then simply follow the above instructions to create your own search handler which utilises scout.
