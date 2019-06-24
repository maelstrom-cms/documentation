# Entry Transformer

When viewing the index page, it's likely that not all the data you want to display is available on the model, or maybe you need to reformat some of it.

Because of this we have the ability to transform each entry before it gets returned to the table.

Defining a transformer is very easy, and similar to a filter handler - the transformer will run for each entry in the results.

::: tip
A common use case of the transformer is return a URL to an uploaded image so that the preview works.
:::

```php
public function __construct()
{
    // Inline Transformation.
    $this->panel->setEntriesTransformer(function ($entry) {
        return [
            'name' => $entry->getDisplayName(),
            'thumbnail' => $entry->getPreviewUrl(),
        ];
    });
    
    // A Model on a Method
    $this->panel->setEntriesTransformer(function ($entry) {
        return $entry->transformForTable();
    });
    
    // Some Other Method
    $this->panel->setEntriesTransformer(function ($entry) {
        return PageService::transformEntry($entry);
    });
}
``` 

As long as you return all the fields you need for your table, everything should be straight forward.

### Custom Handlers on Classes

If you're extending the `Maelstrom\Panel::class` then instead of using the API to define handlers you can define this methods directly on the class e.g.

```php
class PagePanel extends Panel
{
    public function entriesTransformer()
    {
        // ...
    }
}
```
