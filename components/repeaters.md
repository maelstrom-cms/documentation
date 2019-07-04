# Repeaters

We have the ability to create repeatable field sets which allows you to create, remove and reorder sets of information which can be saved into a single JSON filled array.

#### View: `maelstrom::components.repeater`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| max_items | The maximum number if children | 100 | | 
| min_items | The minimum number if children | 0 | | 
| button | Label to display on the button | Item | | 
| fields | An array of field configurations to display | `undefined` | ✅ |

#### Preview 

<img src="/repeater-preview.jpg" class="mt-6 m-w-full h-auto" style="width: 600px;" />

#### Model Configuration

The field set returns a collection of JSON objects, so you'll need to configure your model to cast your attribute as an array e.g.

```php
class Page extends Model
{
    protected $casts = [
        'my_repeater' => 'array',
    ];
}
```

#### From Blade to Arrays

Including a repeater within your form is very similar to any other field inputs, you can provide a `name` and `label` etc...

The main property you'll need to configure is the `fields` array.

This takes a list of other fields, they take the same properties as the blade directives, however we introduce a new one called `component`.

The `component` field takes the name of the blade include for the input. e.g.

```bash
@include('maelstrom::inputs.text', [
    'name' => 'title',
    'label' => 'Page Title',
])

// Turns into...

[
    'component' => 'text',
    'name' => 'title',
    'label' => 'Page Title',
]
```

#### Example 

```bash
@include('maelstrom::components.repeater', [
    'name' => 'members',
    'max_items' => 5,
    'min_items' => 1,
    'button' => 'Player',
    'fields' => [
        [
            'component' => 'text',
            'name' => 'name',
            'label' => 'User Name',
        ],
        [
            'component' => 'date',
            'name' => 'date',
            'label' => 'Join Date',
        ],
        [
            'component' => 'rating',
            'name' => 'rank',
            'label' => 'Ranking',
        ],
        [
            'component' => 'media_manager',
            'name' => 'photo',
            'label' => 'Avatar',
        ],
    ],
]);
```

::: danger
As repeaters are pure JSON, they cannot accept file uploads currently, however you can still use the [Media Manager](#media-manager).
:::
