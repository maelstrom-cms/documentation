---
pageClass: big-toc
---

# Fields & Inputs

We have a whole myriad of input fields to help you which you can use out of the box *(although you can create your own)* many of them follow the same patterns to make it easier for you.

Fields are all added to your form via the blade templates, all within the `maelstrom::inputs` namespace. These can all be overwritten or extended for your own use.

[[toc]]

### Required props

| Property   | Description                                      |
| -          | :-                                               |
| name      | The name of the attribute/db column e.g. `$post->name` would be `name`. |

### Optional props

| Property   | Description                                      | Default |
| -          | :-                                               | :- |
| label | The text which displays in the label. | `name` |
| help | Displays a short piece of help text under the input. | `null` |
| required | Adds a red `*` on the input. | `false` |

::: tip
Whenever an array of options/configurations is passed, we expect a `label` and `value` property - of which the `value` is posted back to the server if selected.
:::

::: warning
In the below examples, we will omit the `required` and `optional` props and only show those specific to the input with an example.
:::

## Checkbox

Displays a normal single checkbox, or a group of checkboxes provided by `$options` which allows multiple selections - occasionally used instead of a select menu.

#### Preview

<img src="/checkbox-preview.jpg" class="mt-6 m-w-full h-auto" style="width: 200px;" />

#### View: `maelstrom::inputs.checkbox`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| options | An array of configs for the checkboxes to display. | `undefined` | ✅ |

#### Example

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

#### Preview

<img src="/colour-preview.jpg" class="m-w-full h-auto" style="width: 200px;" /><br />
<img src="/colour-preview-2.jpg" class="m-w-full h-auto" style="width: 220px;" />

#### View: `maelstrom::inputs.colour`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| type | The type of picker from react-colour | `Circle` | |
| colours | An array of hex values which will act as the pre-defined colours to choose from. | (as per react-color) | |

#### Example

```php
@include('maelstrom::inputs.colour', [
    'type' => 'Circle',
    'colours' => ['#ffffff', '#000000'],
]);
```

Other `type`'s we accept are:

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

## Date Picker

#### Preview

<img src="/date-preview.jpg" class="m-w-full h-auto" style="width: 250px;" /><br />
<img src="/date-preview-2.jpg" class="m-w-full h-auto" style="width: 250px;" />

#### View: `maelstrom::inputs.date`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| display_format | What format to display the date in - from Moment.js | `DD/MM/YYYY` | |
| save_format | What format to display the save in, most likely SQL format | `YYYY-MM-DD` | |
| allow_clear | Show a button to clear the input | `false` | |
| show_today | Show the button which allows you to pick today | `false` | |
| allow_future | Allow dates from the future | `true` | |
| allow_past | Allow dates from the past | `true` | |
| disabled_dates | An array of `YYYY-MM-DD` dates to disable. | `[]` | |

#### Example

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

#### Preview

<img src="/date-range-preview.jpg" class="m-w-full h-auto" style="width: 350px;" /><br />
<img src="/date-range-preview-2.jpg" class="m-w-full h-auto" style="width: 350px;" />

#### View: `maelstrom::inputs.date_range`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| name_start | Which attribute to store the start date in | | ✅ |
| name_end | Which attribute to store the end date in | | ✅ |
| name | When in a repeater, which attribute to store the date range in | | (✅ If in repeater) |
| display_format | What format to display the date in - from Moment.js | `DD/MM/YYYY` | |
| save_format | What format to display the save in, most likely SQL format | `YYYY-MM-DD` | |
| allow_clear | Show a button to clear the input | `false` | |
| show_today | Show the button which allows you to pick today | `false` | |
| allow_future | Allow dates from the future | `true` | |
| allow_past | Allow dates from the past | `true` | |
| disabled_dates | An array of `YYYY-MM-DD` dates to disable. | `[]` | |
| disabled_hours | An array of hours in 24h format to disable e.g. `[07, 08, 21]` | `[]` | |
| disabled_minutes | An array of minutes to disable e.g. `[10, 20, 30]` | `[]` | |

#### Example

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

#### Preview

<img src="/date-time-preview.jpg" class="m-w-full h-auto my-6" style="width: 300px;" />

#### View: `maelstrom::inputs.date_time`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| display_format | What format to display the date in - from Moment.js | `DD/MM/YYYY HH:mm A` | |
| save_format | What format to display the save in, most likely SQL format | `YYYY-MM-DD HH:mm:ss` | |
| allow_clear | Show a button to clear the input | `false` | |
| show_today | Show the button which allows you to pick today | `false` | |
| allow_future | Allow dates from the future | `true` | |
| allow_past | Allow dates from the past | `true` | |
| disabled_dates | An array of `YYYY-MM-DD` dates to disable. | `[]` | |
| disabled_hours | An array of hours in 24h format to disable e.g. `[07, 08, 21]` | `[]` | |
| disabled_minutes | An array of minutes to disable e.g. `[10, 20, 30]` | `[]` | |
| disabled_seconds | An array of seconds to disable e.g. `[10, 20, 30]` | `[]` | |

#### Example

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
    'disabled_seconds' => [
        10, 20, 30, 40, 50, 60,
    ],
    'allow_clear' => true,
    'show_today' => true,
    'allow_future' => true,
    'allow_past' => false,
])
```

## Time Picker

#### Preview

<img src="/time-preview.jpg" class="m-w-full h-auto mt-4" style="width: 200px;" />

#### View: `maelstrom::inputs.time`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| display_format | What format to display the date in - from Moment.js | `HH:mm A` | |
| save_format | What format to display the save in, most likely SQL format | `HH:mm:ss` | |
| allow_clear | Show a button to clear the input | `false` | |
| use_12_hours | Show a button to clear the input | `false` | |
| hour_step | Show a button to clear the input | `1` | |
| minute_step | Show a button to clear the input | `10` | |
| second_step | Show a button to clear the input | `10` | |
| disabled_hours | An array of hours in 24h format to disable e.g. `[07, 08, 21]` | `[]` | |
| disabled_minutes | An array of minutes to disable e.g. `[10, 20, 30]` | `[]` | |
| disabled_seconds | An array of seconds to disable e.g. `[10, 20, 30]` | `[]` | |

#### Example

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
    'disabled_seconds' => [
        10, 20, 30, 40, 50, 60,
    ],
    'allow_clear' => true,
])
```

## File Uploader

If you need to upload a single un-managed file, e.g. a PDF then this will be for you.

#### Preview

<img src="/file-preview.jpg" class="mt-6 m-w-full h-auto" style="width: 300px;" />

#### View: `maelstrom::inputs.file`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| icon | The icon to display within the button | `upload` | |
| button | The text to display in the button | Select file | |

#### Example

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

#### Preview

<img src="/files-preview.jpg" class="mt-6 m-w-full h-auto" style="width: 300px;" />

#### View: `maelstrom::inputs.files`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| icon | The icon to display within the button | `upload` | |
| button | The text to display in the button | Select file | |
| max_items | Maximum number of files | 1000 | |

#### Example

```php
@include('maelstrom::inputs.files', [
    
    'max_items' => 5,
    
    'icon' => 'upload',
    'button' => 'Browse',
])
```

## Image Uploader

Very much the same as the file uploader, but support thumbnails.

#### Preview

<img src="/image-preview.jpg" class="mt-6 m-w-full h-auto" style="width: 250px;" />

#### View: `maelstrom::inputs.image`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| icon | The icon to display within the button | `file-image` | |
| button | The text to display in the button | Select image | |

#### Example

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

#### Preview

<img src="/images-preview.jpg" class="mt-6 m-w-full h-auto mt-6" style="width: 500px;" />

#### View: `maelstrom::inputs.images`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| icon | The icon to display within the button | `file-image` | |
| button | The text to display in the button | Select images | |
| max_items | Maximum number of files | 1000 | |

#### Example

```php
@include('maelstrom::inputs.images', [
    
    'max_items' => 5,
    
    'icon' => 'file-image',
    'button' => 'Select images',
])
```

## Media Manager

For full explanation of the media manager you can refer to the [Media Manager Documentation](./media-manager.md)

#### Preview

<img src="/media-manager-preview.jpg" class="mt-6 m-w-full h-auto" style="width: 600px;" />

#### View: `maelstrom::components.media_manager`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| max_items | Maximum number of assets | 1 | |

#### Example

```php
@include('maelstrom::components.media_manager', [
    'label' => 'Photo',
    'name' => 'photo',
    'max_items' => 5,
])
```

> **Warning** - Notice the media manager is within `components` not `inputs`.

When the button is clicked, a Drawer component will open with the media library loaded allowing you to make your selection.

<img src="/media-browser-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

## Icon Picker

Not a very helpful field input, but we have it anyway :)

This lets you pick an icon from the outlined `icon` collection from [Ant Design Icons](https://ant.design/components/icon/).

#### Preview

<img src="/icons-preview.jpg" class="mt-6 m-w-full h-auto mb-3" style="width: 300px;" />

#### View: `maelstrom::inputs.icon`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| icons | An array of icon names to limit the selection to. | (all ant design icons) | |

#### Example

```php
@include('maelstrom::inputs.icon', [
    'icons' => ['file', 'file-image', 'file-pdf'],
])
```

You're able to limit / hand-pick the icons you want to make available if you pass in the `icon` option.

## Markdown Editor

We use [React MDE](https://github.com/andrerpena/react-mde) for provide markdown editing support and [Shadowdown](http://showdownjs.com/) to render it in the preview pane which you can activate by clicking the source code toggle.

<img src="/markdown-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

#### View: `maelstrom::inputs.markdown`

#### Example

```php
@include('maelstrom::inputs.markdown', [
    // ... nothing special just the defaults.
])
```

## Number Input

#### Preview

<img src="/number-preview.jpg" class="m-w-full h-auto mt-4" style="width: 100px;" />

#### View: `maelstrom::inputs.number`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| min | Smallest possible number | 0 | |
| max | Biggest possible number | 100000 | |
| precision | How many decimal places | 0 | |
| step | When the up/down is clicked - how much to adjust by. | 1 | |

#### Example

```php
@include('maelstrom::inputs.number', [
    'min' => 10,
    'max' => 1000,
    'precision' => 2,
    'step' => 10,
])
```

## Algolia Places Lookup

We're using [Algolia Places React Wrapper](https://github.com/kontrollanten/algolia-places-react) to provide Algolia Places support.

#### Preview

<img src="/places-preview.jpg" class="mt-6 m-w-full h-auto" style="width: 600px;" />

#### View: `maelstrom::inputs.place`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| options | Plugin options from `algolia-places-react` | [] | |

The `options` prop takes all the options explained on:

- [options](https://address-autocomplete-react.netlify.com/api/#!/AlgoliaPlaces)
- [options.clientOptions](https://www.algolia.com/doc/api-client/getting-started/instantiate-client-index/#client-options)
- [options.autocompleteOptions](https://github.com/algolia/autocomplete.js#options)

#### Example

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

## Radio Buttons

When you need to enable only a single choice from some options, radios are often useful.

#### Preview

<img src="/radio-preview.jpg" class="mt-6 m-w-full h-auto" style="width: 150px;" />

#### View: `maelstrom::inputs.radio`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| options | An array of configs for the radios to display. | `undefined` | ✅ |

#### Example

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

#### Preview

<img src="/text-preview.jpg" class="mt-6 m-w-full h-auto" style="width: 800px;" />

#### View: `maelstrom::inputs.text`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| html_type | Change the html `type` attribute e.g. `url` or `email` | text |  |
| autocomplete | Change the html `autocomplete` attribute e.g. `new-password` | `null` |  |
| allow_clear | Show a button to clear the fields value | `true` |  |
| prefix | Text to show at the start of the text input | `null` |  |
| prefix_icon | Icon to show at the start of the text input from ant design icons | `null` |  |
| suffix | Text to show at the end of the text input | `null` |  |
| suffix_icon | Icon to show at the end of the text input from ant design icons | `null` |  |
| addon_before | Adds a block in front of the input with this text | `null` |  |
| addon_before_icon | Adds a block in front of the input with this icon | `null` |  |
| addon_after | Adds a block after of the input with this text | `null` |  |
| addon_after_icon | Adds a block after of the input with this icon | `null` |  |

#### Example

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

::: warning
There is a known issue with ant design regarding including `allow_clear = true` with `suffix` and `suffix_icon` which makes their alignments wonky.
:::

## Text Area Input

You can enable "text area mode" on the `maelstrom::inputs.text` component by passing the `html_type` as `textarea`.

#### Preview

<img src="/textarea-preview.jpg" class="mt-4 m-w-full h-auto" style="width: 800px;" />

#### View: `maelstrom::inputs.text`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| html_type | Set this to `textarea` | `text` | ✅ |
| auto_size | Takes the configuration for the automatic sizing (shown below). | `false` | |

#### Example

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

#### Preview

<img src="/random-preview.jpg" class="mt-4 m-w-full h-auto" style="width: 800px;" />

#### View: `maelstrom::inputs.random`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| length | What length string should be generated? | 32 | |
| charset | Which characters could be included in the random string. | `abcdefghijklmnopqrstuvwxyz`<br/>`ABCDEFGHIJKLMNOPQRSTUVWXYZ`<br/>`0123456789`<br/>`!@£$%^&*()-_=+[]{};:|/.,<>` | |

#### Example

```php
@include('maelstrom::inputs.random', [
    'length' => 20,
    'charset' => '0123456789',
])
```

> And all the options from the [text](#text-input) input.

## Star Rating

#### Preview

<img src="/rating-preview.jpg" class="m-w-full h-auto mt-4" style="width: 140px;" />

#### View: `maelstrom::inputs.rating`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| count | Max allowed stars to be picked | 5 | |
| character | Displays a text character instead of the star icon | `undefined` | |
| icon | The icon to display as the star | ⭐️ | |
| colour | The colour of the icon when selected | `#f6da4d` | |
| allow_half | Allow half star ratings | `false` | |
| allow_clear | Allow the rating to be clicked again to clear | `false` | |

::: warning
If you define the `character` prop it will overwrite the `icon` prop.
:::

#### Example

```php
@include('maelstrom::inputs.rating', [
    'count' => 8,
    'allow_half' => true,
    'character' => '$',
    'icon' => 'home',
    'colour' => '#ff0000',
    
    'allow_clear' => true,
]);
```

## Secret / Password Field

Although not recommended for setting users passwords, this can be used for secretive information such as private keys.

#### Preview

<img src="/secret-preview.jpg" class="mt-4 m-w-full h-auto" style="width: 800px;" />

#### View: `maelstrom::inputs.secret`

#### Example

```php
@include('maelstrom::inputs.secret', [
    // ... those from the text input.
])
```

## Select Menu

Select menu can be used for a variety of things, commonly used for relationships.

If you're using it for relationships you can enable the create button feature to create items on the fly.

#### Preview

<img src="/select-preview-2.jpg" class="mt-6 m-w-full h-auto" style="width: 500px;" />

> **More Reading:** Use the [Form Options API](./form-options.md) to fetch remote data.

#### View: `maelstrom::inputs.select`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| allow_clear | Allow the input to be reset with a clear button | `true` |  |
| show_search | Allows the user to use an autocomplete to filter results | `true` |  |
| options | An array of options to choose from | `undefined` | ✅ |
| remote_uri | A url to fetch options from | `undefined` | (✅ If using `create_button`)  |
| create_button | Displays a create button to live create resources. (See [Nested resources](#nested-resources-sort-of)) | `false` |  |

#### Example

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

The multiple select is identical to a single select, but just allows multiple options to be selected and stored as an array.

#### Preview

<img src="/multi-select-preview.jpg" class="mt-4 m-w-full h-auto mb-4" style="width: 700px;" />

#### View: `maelstrom::inputs.select_multiple`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| allow_clear | Allow the input to be reset with a clear button | `true` |  |
| show_search | Allows the user to use an autocomplete to filter results | `true` |  |
| options | An array of options to choose from | `undefined` | ✅ |
| remote_uri | A url to fetch options from | `undefined` | (✅ If using `create_button`)  |
| create_button | Displays a create button to live create resources. (See [Nested resources](#nested-resources-sort-of)) | `false` |  |

#### Example 

```php
@include('maelstrom::inputs.select_multiple', [
    // ... same as single select
])
```

> You can also use the Form Options API and the Create button.

## Tagging

The tagging input works the same as the multiple select, however it allows users to enter values that do not yet exist.

By default when picking an existing item from the list it will provide back the `value` from the supplied options, most likely a primary key.

When the user creates a new tag, you'll get posted the string value so you can handle it.

If you want to make sure you always get the `label` value you can set `save_labels` to `true`.

#### Preview

<img src="/tags-preview.jpg" class="mt-4 m-w-full h-auto" style="width: 600px;" />

#### View: `maelstrom::inputs.tags`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| allow_wild_values | Allows you display items within the input that do not exist in the `options` array. | `false` | |
| save_labels | Sends the `label` value to the backend rather than the `value` field. | `false` | |
| allow_clear | Allow the input to be reset with a clear button | `true` |  |
| show_search | Allows the user to use an autocomplete to filter results | `true` |  |
| options | An array of options to choose from | `undefined` | ✅ |
| remote_uri | A url to fetch options from | `undefined` | (✅ If using `create_button`)  |
| create_button | Displays a create button to live create resources. (See [Nested resources](#nested-resources-sort-of)) | `false` |  |

#### Example

```php
@include('maelstrom::inputs.tags', [
    'options' => [
        [
            'label' => 'health',
            'value' => 1,
        ],
        [
            'label' => 'happiness',
            'value' => 2,
        ],
        [
            'label' => 'wisdom',
            'value' => 3,
        ],
    ],
    'allow_wild_values' => true,
    'save_labels' => true,
]);
```

## Transfer / Relationship

This is the recommended input to use when you need to present the user with lots of options which can be attached to give greater visibility, e.g. Product Specs.

#### Preview

<img src="/transfer-preview.jpg" class="mt-4 m-w-full h-auto" style="width: 600px;" />

> **More Reading:** Use the [Form Options API](./form-options.md) to fetch remote data.

#### View: `maelstrom::inputs.transfer`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| options | An array of options to choose from | `undefined` | ✅ |
| remote_uri | A url to fetch options from | `undefined` | (✅ If using `create_button`)  |
| create_button | Displays a create button to live create resources. (See [Nested resources](#nested-resources-sort-of)) | `false` |  |

#### Example 

```php
@include('maelstrom::inputs.transfer', [
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

## Video (Vimeo and YouTube)

You can provide any URL that the [oEmbed spec supports](https://oembed.com/) and it will automatically fetch the video data and store a JSON object with some useful information in.

#### Preview

<img src="/video-preview.jpg" class="mt-4 m-w-full h-auto" style="width: 600px;" />

#### View: `maelstrom::inputs.video`

#### Additional properties
This field extends the [TextInput](#text-input) which means it supports most of the same props.

#### Example 

Both Vimeo and YouTube will return the following in a standardised format - so makes sure you cast your model to `object` for this attribute e.g.

```json
{
    "id":"ut2KhcNtnm8",
    "url":"https:\/\/www.youtube.com\/watch?v=ut2KhcNtnm8",
    "thumbnail":"https:\/\/i.ytimg.com\/vi\/ut2KhcNtnm8\/hqdefault.jpg",
    "title":"4K Wild Animals - Africa, Mana Pools National Park with Nature Sounds - 4 HRS"
}
```

```php
@include('maelstrom::inputs.video', [
    //... TextInput props.
]);
```

::: warning
If you have a CSP, make sure `https://noembed.com` is whitelisted for `connect-src`.
:::

## WYSIWYG Editor

We use [React Prosemirror](https://github.com/hubgit/react-prosemirror/blob/master/react-prosemirror/README.md) with a basic WYSIWYG configuration - You can extend this component and replace it with your own if you want more customisation.

#### View: `maelstrom::inputs.wysiwyg`

#### Previews

<img src="/wysiwyg-preview.jpg" class="mt-4 m-w-full h-auto" style="width: 600px;" />

When toggling between source code mode it will render another editor provided by [React Ace Editor](https://github.com/securingsincity/react-ace) to fine tune the content.

<img src="/wysiwyg-preview-2.jpg" class="m-w-full h-auto" style="width: 600px;" />

#### Example

```php
@include('maelstrom::inputs.wysiwyg', [
    //... Nothing fancy, just the basic options defined at the start.
])
```

## Switch w/ Visibility Toggle

For boolean style fields we have the toggle switch component, which has the ability to adjust the visibility of other fields.

#### Preview

<img src="/switch-preview.jpg" class="m-w-full h-auto" style="width: 100px;" />

#### View: `maelstrom::inputs.switch`

#### Additional properties

| Property   | Description | Default | Required |
| - | :- | :- | :-: |
| on_value | What value should be returned when the switch is on | 1 | |
| off_value | What value should be returned when the switch is off | 0 | |
| on_text | What text to display when the switch is on | `null` | |
| off_text | What text to display when the switch is off | `null` | |
| on_icon | What icon to display when the switch is on | `null` | |
| off_icon | What icon to display when the switch is off | `null` | |
| hide_on | Hide other fields when the switch is on (see below) | `[]` | |
| hide_off | Hide other fields when the switch is off (see below) | `[]` | |

> If an `_icon` prop is defined this overwrites any `_text` props set.

#### Example 

```php
@include('maelstrom::input.switch', [
    'on_value' => 1,
    'off_value' => 0,
    
    'on_text' => 'on',
    'off_text' => 'off',
    
    'on_icon' => 'home',
    'off_icon' => null,
    
    'hide_off' => [],
    
    'hide_on' => [
        'featured_image', 'featured_headline',
    ],
])
```

#### Toggling field visibility

The `hide_on` and `hide_off` props accept an array of other inputs which should be hidden when the switch is either turned on or off. You should pass in the name of the attribute you want to hide e.g.

```php
@include('maelstrom::input.switch', [
    'name' => 'is_featured',
    'hide_off' => ['featured_image'],
])

// This field is hidden whilst the switch is turned off.
@include('maelstrom::input.image', [
    'name' => 'featured_image',
])
``` 

## Repeatable Inputs

We also have the ability to create repeatable field sets which store as JSON.

You can read in full detail on the [Repeatable Inputs Documentation](./repeaters.md).

<img src="/repeater-preview.jpg" class="m-w-full h-auto" style="width: 600px;" />

You must define a `fields` array which takes a list of inputs that you want to include, with the addition of the `component` property which defines which `input` to include.

```php
@include('maelstrom::components.repeater', [
    'max_items' => 5,
    'min_items' => 1,
    'fields' => [
        [
            'component' => 'text',
            'name' => 'name',
        ],
        [
            'component' => 'date',
            'name' => 'date',
        ],
        [
            'component' => 'rating',
            'name' => 'rank',
        ],
        [
            'component' => 'media_manager',
            'name' => 'photo',
        ],
    ],
]);
```

::: danger
As repeaters are pure JSON, they cannot accept file uploads currently, however you can still use the [Media Manager](#media-manager).
:::

## Nested Resources (sort of)

As mentioned in previous input fields we have the ability to create nested / related resources on the fly by a pull out drawer.

You're able to attach the create button to most multi-choice inputs, e.g. Selects, Transfers etc.

<img src="/nested-preview.jpg" class="m-w-full h-auto" style="width: 500px;" />

You're also able to include a nested resource button anywhere in the templates.

```php
@include('maelstrom::input.nested-resource', [
    'url' => 'any url here',
    'icon' => 'plus',
    'button' => 'Create',
    'style' => 'primary',
    'size' => 'large',
]);
```

::: tip
The drawer is a glorified iframe which adds a class `iframe-mode` to `.maelstrom-wrapper` - so if you're using your own templates, make sure you include that class.
:::
