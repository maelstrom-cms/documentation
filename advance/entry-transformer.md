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

## Appending Attributes

Sometimes a full transformer is overkill, and you just need to append a single attribute / accessor to the serialised data.

You can do this using the `setWithAttributes()` method.

e.g. Imagine you had a post count attribute on your model.

```php
class Category extends Model
{
    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
    
    public function getPostCountAttribute()
    {
        return $this->posts->count();
    }
}
```

You can then append this attribute so all the models will be provided with this data.


```php
class CategoryController extends Controller
{
    protected $panel;
    
    public function __construct()
    {
        $this->panel = maelstrom(Category::class)
        ->setWithAttributes(['post_count]);
    }
}
```

The array of `$entries` will now have the result of the `getPostCountAttribute` method appended so your javascript or the entry table component can access it.
