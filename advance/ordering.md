# Ordering / Sorting

Sorting is fairly straight forward! Although currently you can only sort by database values on the immediate Model.

This means you cannot sort on:

- Relationships
- Accessors

<img src="/sorting-preview.jpg" alt="Preview of sorting" class="shadow m-w-full h-auto" style="width: 300px;" />

### Frontend

To enable a column to be sorted, just add `sorter = true` to the definition.

```php
$columns = [[
    'label' => 'Gender',
    'dataIndex' => 'gender',
    'sorter' => true,
]];
```

::: tip
If you need more advance sorting, you can create a custom `Panel` which extends `\Maelstrom\Panel` and overwrite the `applySorting()` method.
:::
