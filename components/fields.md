---
pageClass: big-toc
---

# 🛠 Fields & Inputs

We have a whole myriad of input fields to help you which you can use out of the box *(although you can create your own)* many of them follow the same patterns to make it easier for you.

Fields are all added to your form via the blade templates, all within the `maelstrom::inputs` namespace. These can all be overwritten or extended for your own use.

[[toc]]

### Required props

- `name` - The name of the attribute/db column e.g. `$post->name` would be `name`.

### Optional props

- `label` - The text which displays in the label (defaults to the `name` field).
- `help` - Displays a short piece of help text under the input
- `required` - Adds a red `*` on the input.

::: tip
Whenever an array of options/configurations is passed, we expect a `label` and `value` property - of which the `value` is posted back to the server if selected.
:::

::: warning
In the below examples, we will omit the `required` and `optional` props and only show those specific to the input with an example.
:::

## Checkbox

Displays a normal single checkbox, or a group of checkboxes provided by `$options` which allows multiple selections - occasionally used instead of a select menu.

<img src="/checkbox-preview.jpg" class="m-w-full h-auto" style="width: 200px;" />

```php
@include('maelstrom::inputs.checkbox', [
    'options' => [
        [
            'label' => 'Can edit',
            'value' => 'can_edit',
        ],
        [
            'label' => 'Can delete',
            'value' => 'can_delete',
        ],
    ],
    'required' => true,
    'help' => 'Some helpful supporting text.',
    'label' => 'Permissions',
    'name' => 'permissions',
]);
```

## Colour Picker

> Sorry we're English, so it's `colour` in maelstrom world - This component utilises [https://casesandberg.github.io/react-color/](https://casesandberg.github.io/react-color/)

<img src="/colour-preview.jpg" class="m-w-full h-auto" style="width: 200px;" /><br />
<img src="/colour-preview-2.jpg" class="m-w-full h-auto" style="width: 220px;" />

```php
@include('maelstrom::inputs.colour', [
    'type' => 'Circle',
    'colours' => ['#ffffff', '#000000'],
]);
```

Other `type` we accept are:

- Circle (default)
- Github
- Twitter
- Compact
- Material
- Slider
- Sketch
- Photoshop
- Chrome
- Swatches
- Block

If you want to provide a selection of pre-defined colours then pass in an array of hex values to the `options` property e.g.

```php
'colours' => ['#ffffff', '#000000'],
```

## Date Picker

<img src="/date-preview.jpg" class="m-w-full h-auto" style="width: 250px;" /><br />
<img src="/date-preview-2.jpg" class="m-w-full h-auto" style="width: 250px;" />

```php
@include('maelstrom::inputs.date', [
    'display_format' => 'DD/MM/YYYY',
    'save_format' => 'YYYY-MM-DD',
    'allow_clear' => true,
    'show_today' => true,
    'allow_future' => true,
    'allow_past' => false,
    'disabled_dates' => [
        '2017-03-28',
    ],
])
```

::: warning
The `save_format` and `display_format` should follow the patterns provided by [Moment.js](https://momentjs.com/docs/#/displaying/)
:::

## Date Range Picker

<img src="/date-range-preview.jpg" class="m-w-full h-auto" style="width: 350px;" /><br />
<img src="/date-range-preview-2.jpg" class="m-w-full h-auto" style="width: 350px;" />

```php
@include('maelstrom::inputs.date_range', [

    'name_start' => 'promotion_start',
    'name_end' => 'promotion_end',
    'disabled_dates' => [
        '2017-03-28',
    ],
    'disabled_hours' => [
        1, 2, 3, 4, 5, 6, 7,
        20, 21, 22, 23, 24,
    ],
    'disabled_minutes' => [
        5, 15, 25, 35, 45, 55,
    ],
    'disabled_minutes' => [
        10, 20, 30, 40, 50, 60,
    ],
    
    'display_format' => 'DD/MM/YYYY',
    'save_format' => 'YYYY-MM-DD',
    'allow_clear' => true,
    'show_today' => true,
    'allow_future' => true,
    'allow_past' => false,
])
```

The `name_start` and `name_end` properties take the attribute name which should store each time stamp.

::: warning
If you're using the `date_range` input within a repeater then you just supply the `name` property as this will contain an array of the range.
:::

## Date Time Picker

<img src="/date-time-preview.jpg" class="m-w-full h-auto my-6" style="width: 300px;" />

```php
@include('maelstrom::inputs.date_time', [

    'display_format' => 'DD/MM/YYYY HH:mm A',
    'save_format' => 'YYYY-MM-DD HH:mm:ss',
    
    'disabled_dates' => [
        '2017-03-28',
    ],
    'disabled_hours' => [
        1, 2, 3, 4, 5, 6, 7,
        20, 21, 22, 23, 24,
    ],
    'disabled_minutes' => [
        5, 15, 25, 35, 45, 55,
    ],
    'disabled_minutes' => [
        10, 20, 30, 40, 50, 60,
    ],
    'allow_clear' => true,
    'show_today' => true,
    'allow_future' => true,
    'allow_past' => false,
])
```

## Time Picker

<img src="/time-preview.jpg" class="m-w-full h-auto mt-4" style="width: 200px;" />

```php
@include('maelstrom::inputs.time', [
    
    'use_12_hours' => true,
    'second_step' => 10,
    'minute_step' => 10,
    'hour_step' => 1,
    
    'display_format' => 'HH:mm A',
    'save_format' => 'HH:mm:ss',
    'disabled_hours' => [
        1, 2, 3, 4, 5, 6, 7,
        20, 21, 22, 23, 24,
    ],
    'disabled_minutes' => [
        5, 15, 25, 35, 45, 55,
    ],
    'disabled_minutes' => [
        10, 20, 30, 40, 50, 60,
    ],
    'allow_clear' => true,
])
```

## File Uploader

If you need to upload a single un-managed file, e.g. a PDF then this will be for you.

<img src="/file-preview.jpg" class="m-w-full h-auto" style="width: 300px;" />

```php
@include('maelstrom::inputs.file', [
    'icon' => 'upload',
    'button' => 'Attach PDF',
])
```

You can pick outlined `icon` from [Ant Design Icons](https://ant.design/components/icon/)

::: warning
Make sure you configure your `uploadables` within your panel as described [the Uploadables documentation](../advance/uploading.md)
:::

## Multiple File Uploader

This acts the same as the single file uploader, however will store an array of file paths *so make sure your `protected $casts`* is correct.

<img src="/files-preview.jpg" class="m-w-full h-auto" style="width: 300px;" />

```php
@include('maelstrom::inputs.files', [
    
    'max_items' => 5,
    
    'icon' => 'upload',
    'button' => 'Browse',
])
```

## Image Uploader

Very much the same as the file uploader, but support thumbnails.

<img src="/image-preview.jpg" class="m-w-full h-auto" style="width: 250px;" />

```php
@include('maelstrom::inputs.image', [
    'icon' => 'file-image',
    'button' => 'Select image',
])
```

::: warning
Make sure you configure your `uploadables` within your panel as described [the Uploadables documentation](../advance/uploading.md)
:::

## Multiple Image Uploader

<img src="/images-preview.jpg" class="m-w-full h-auto mt-6" style="width: 500px;" />

```php
@include('maelstrom::inputs.images', [
    
    'max_items' => 5,
    
    'icon' => 'file-image',
    'button' => 'Select images',
])
```

## Media Manager

For full explanation of the media manager you can refer to the [Media Manager Documentation](./media-manager.md)

<img src="/media-manager-preview.jpg" class="m-w-full h-auto" style="width: 600px;" /><br />

```php
@include('maelstrom::components.media_manager', [
    'label' => 'Photo',
    'name' => 'photo',
    'max_items' => 1
])
```

> **Warning** - Notice the media manager is within `components` not `fields`.

When the button is clicked, a Drawer component will open with the media library loaded allowing you to make your selection.

<img src="/media-browser-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

## Icon Picker

Not a very helpful field input, but we have it anyway :)

This lets you pick an icon from the outlined `icon` collection from [Ant Design Icons](https://ant.design/components/icon/).

<img src="/icons-preview.jpg" class="m-w-full h-auto mb-3" style="width: 300px;" />

```php
@include('maelstrom::inputs.icon', [
    'icons' => ['file', 'file-image', 'file-pdf'],
])
```

You're able to limit / hand-pick the icons you want to make available if you pass in the `icon` option.

## Markdown Editor

We use [React MDE](https://github.com/andrerpena/react-mde) for provide markdown editing support and [Shadowdown](http://showdownjs.com/) to render it in the preview pane which you can activate by clicking the source code toggle.

<img src="/markdown-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

```php
@include('maelstrom::inputs.markdown', [
    // ... nothing special just the defaults.
])
```

## Number Input

<img src="/number-preview.jpg" class="m-w-full h-auto mt-4" style="width: 100px;" />

```php
@include('maelstrom::inputs.number', [
    'min' => 10,
    'max' => 1000,
    'precision' => 2, // how many decimal places
    'step' => 10, // when the up/down is clicked - how much to adjust by.
])
```

## Algolia Places Lookup

We're using [Algolia Places React Wrapper](https://github.com/kontrollanten/algolia-places-react) to provide Algolia Places support.

<img src="/places-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

```php
@include('maelstrom::inputs.place', [
    'options' => [
        'countries' => ['es'],
        'clientOptions' => [
            // ...
        ],
        'autocompleteOptions' => [
            // ...
        ],
    ],
])
```

The `options` prop takes all the options explained on  and []()

- [options](https://address-autocomplete-react.netlify.com/api/#!/AlgoliaPlaces)
- [options.clientOptions](https://www.algolia.com/doc/api-client/getting-started/instantiate-client-index/#client-options)
- [options.autocompleteOptions](https://github.com/algolia/autocomplete.js#options)

## Radio Buttons

When you need to enable only a single choice from some options, radios are often useful.

<img src="/radio-preview.jpg" class="m-w-full h-auto" style="width: 150px;" />

```php
@include('maelstrom::inputs.radio', [
    'options' => [
        [
            'label' => 'Yes',
            'value' => 1,
        ],
        [
            'label' => 'No',
            'value' => 0,
        ],
    ],
]);
```

## Text Input

The text input powers several other inputs, allowing them to inherit certain other properties.

- [Text Area](#text-area-input)
- [Video](#video-vimeo-and-youtube)
- [Random Generator](#random-string-generator)
- [Secret / Password](#secret-password-field)

<img src="/text-preview.jpg" class="m-w-full h-auto" style="width: 800px;" />

```php
@include('maelstrom::inputs.text', [
    'html_type' => 'url',
    'autocomplete' => 'new-password',
    'allow_clear' => true,
    
    'prefix' => '$',
    'prefix_icon' => 'credit-card'
    
    'suffix' => 'mph',
    'suffix_icon' => 'car',
    
    'addon_before' => '$',
    'addon_before_icon' => 'credit-card',
    
    'addon_after' => 'mph',
    'addon_after_icon' => 'car',
]);
```

## Text Area Input

You can enable "text area mode" on the `text` component by passing the `html_type`.

<img src="/textarea-preview.jpg" class="m-w-full h-auto" style="width: 800px;" />

```php
@include('maelstrom::inputs.text', [
    'html_type' => 'textarea',
    'auto_size' => [
        'minRows' => 5,
        'maxRows' => 50,
    ],
])
```

The `auto_size` property allows the text area to automatically grow with the content added within the defined constraints.

## Random String Generator

Sometimes it can be useful to generate random strings e.g. for API keys or passwords.

<img src="/random-preview.jpg" class="m-w-full h-auto" style="width: 800px;" />

```php
@include('maelstrom::inputs.random', [
    'length' => 20,
    'charset' => '0123456789', // Custom character set to generate from.
])
```

> And all the options from the [text](#text-input) input.

## Star Rating

<img src="/rating-preview.jpg" class="m-w-full h-auto mt-4" style="width: 170px;" />

```php
@include('maelstrom::inputs.rating', [
    'count' => 8, // max allowed stars
    'allow_half' => true,
    'character' => '$',
    'icon' => 'home', // icon gets overwritten by character, can't have both.
    'colour' => '#ff0000',
    
    'allow_clear' => true,
]);
```

## Secret / Password Field

Although not recommended for setting users passwords, this can be used for secretive information such as private keys.

<img src="/secret-preview.jpg" class="m-w-full h-auto" style="width: 800px;" />

```php
@include('maelstrom::inputs.secret', [
    // ... those from the text input.
])
```

## Select Menu

Select menu can be used for a variety of things, commonly used for relationships.

If you're using it for relationships you can enable the nested resource feature to create items on the fly.

<img src="/select-preview-2.jpg" class="m-w-full h-auto" style="width: 500px;" />

> **More Reading:** Use the [Form Options API](./form-options.md) to fetch remote data.

```php
@include('maelstrom::inputs.select', [
    'allow_clear' => true,
    'show_search' => true,
    'options' => [
        [
            'label' => 'Books',
            'value' => 1,
        ],
        [
            'label' => 'Food',
            'value' => 2,
        ],
        [
            'label' => 'Sports',
            'value' => 3,
        ],
    ],
    'remote_uri' => route('maelstrom.form-options', 'categories'), // Uses the form options API.
    'create_button' => [
        'url' => route('categories.create'),
        'icon' => 'plus',
        'text' => 'Create',
        'style' => 'primary',
        'size' => 'large',
    ],
]);
```

::: warning
If you want to use the inline "Create" button - you must define a `remote_uri` to fetch the updated entries from - usually from the [Form Options API](./form-options.md).
:::

## Multiple Select Menu

The multiple select is identical to a single select, but just allows multiple options to be selected.

<img src="/multi-select-preview.jpg" class="m-w-full h-auto mb-4" style="width: 700px;" />

```php
@include('maelstrom::inputs.select_multiple', [
    // ... same as single select
])
```

## Tagging

<img src="/tags-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

## Transfer / Relationship

<img src="/transfer-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

## Video (Vimeo and YouTube)

<img src="/video-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

## WYSIWYG Editor

<img src="/wysiwyg-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />
<img src="/wysiwyg-preview-2.jpg" class="m-w-full h-auto" style="width: 600px;" />

## Repeatable Inputs

<img src="/repeater-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

## Switch w/ Visibility Toggle

<img src="/switch-preview.jpg" class="m-w-full h-auto" style="width: 100px;" />

## Nested Resources

<img src="/nested-preview.jpg" class="m-w-full h-auto" style="width: 500px;" />
