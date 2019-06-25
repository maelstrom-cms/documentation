# Form Options API

The Form Options API provides a simple single point of entry that allows you to return AJAX values for components such as Select Menus.

It also enables the ability to create nested resources as once the entry has been created it can refresh the form options to populate your newly created item.

You can configure which entities are exposed via the `config/maelstrom.php` within the `form_options` section.

You can also apply custom guards, or disable it completely if you like.

The most important section of the config is the `models` property, this is where you provide a list of models which can be returned from the API.

For example, the configuration could look like

```php
'models' => [
    'categories' => [
        'model' => App\Category::class,
        'scopes' => ['customScope'],
        'value' => 'id',
        'label' => 'name',
    ],
    'tags' => [
        'model' => App\Tag::class,
        'scopes' => [],
        'value' => 'id',
        'label' => 'name',
    ],
    'pages' => [
        'model' => App\Page::class,
        'scopes' => [],
        'value' => 'id',
        'label' => 'name',
    ]
]
```

### The URL

The `key` of a specific model acts as the URL param which will be used later. e.g. if you have

```php
'lemonade_recipes' => [
    // ...
]
```

The URL to access a list of these would be

```php
.com/maelstrom-api/form-options/lemonade_recipes
```

### The Configuration

Each entry takes 4 options for basic customisation

- `model` - This is a FQN of an eloquent model e.g. `App\Page::class`
- `scopes` - If you need to limit which models return, you can apply a scope to it - this must always be an array otherwise it will get ignored.
- `value` - This is the name of the attribute which holds the value you want to save in the database, often it's the primary key or `id` field.
- `label` - This is the name of the attribute which holds the display text, can be an accessor etc.

### Making the inputs use the API

By default all form inputs which support remote data will use the original `options` prop that have been passed in, then when a refresh is requested they will look for the `remote_uri` prop to take the updated data from.

This means your select menu might look something like this.

```php
@include('maelstrom::fields.select', [
    'name' => 'lemonade_recipes',
    'label' => 'Lemonade Recipes',
    'options' => RecipeService::formOptions(),
    'remote_uri' => route('maelstrom.form-options', 'lemonade_recipes'),
])
```

This will then set up everything you need for AJAX inputs.

::: tip
Using the `route()` helper along with the name `maelstrom.form-options` and passing in the `key` of what you want is the easiest way to get the URL for the API.
:::

### Supported Inputs

Currently the base field types which support remote options are

- [Transfer / Relationship Input](./fields.md#transfer--relationship)
- [Select / Select Multiple Input](./fields.md#select-menu)
