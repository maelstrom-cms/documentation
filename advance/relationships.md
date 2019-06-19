# Relationships

We provide "basic" support for all relationship types. This gives you the ability to associate models with other models, be it a 1 to 1 relationship, or many to many.

It's best to explicitly define your relationships to make sure they update correctly - which you can do e.g.

```php
public function __construct()
{
    $this->panel->setRelationships([
        'tags' => 'tags',
        'category_id' => 'category',
    ])
}
```

The structure above represents a mapping between a form input name, and the relationship method name.

If you have an HTML form with an input with the name of `category_id` e.g. `$_POST['category_id']` and you want it to update the `category` relationship, you would have

```php
[ 'category_id' => 'category' ]
```

For the UI components for relationships you'll want to either use a Select input or the Transfer input.

### Eager Loading

When loading your entries, you might want to load all the relationships in one go for performance reasons, if this is the case you can do so by defining the names of the relationships to eager load.

So if you have the following relationships on your model:

```php
class Page extends Model
{
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
    public function tags()
    {
        return $this->>belongsToMany(Tag::class);
    }
}
```

You can eager load them via passing an array with the method name of the relationship

```php
public function __construct()
{
    $this->panel->setEagerLoad(['category', 'tags']);
}
```
