---
pageClass: big-toc
---

# Columns

[[toc]]

### Required props

- `title` - The text that displays on the heading
- `dataIndex` - the property that stores the data to pass to the row, this can use dot notation for nested properties e.g. `category.name`

### Optional props

- `type` - Pass in the name of a column type e.g. `BooleanColumn` or even a custom column.
- `sorter` - Enables the sorting button on the heading e.g. `'sorter' => true`.
- `filters` - An array of `text` / `value` to make the heading filterable - find out more in the [filtering docs.](../advance/filtering.md)
- `filterMultiple` - If the filter has multiple options.
- `align` - Text alignment of the content.
- `width` - Take a guess.
- `className` - A custom classname for the column.
- `fixed` - If the column should be fixed position e.g. `left` or `right`.
- `searchable` - If the column should show in the search dropdown.
- `searchColumn` - What db column to search when selected.

## Text

By default all column types act as `text` unless a `type` is specified.

## Text Link

You can turn columns into links, which can be useful for linking to related models etc.

#### Type: `LinkColumn`

#### Props

| Property   | Description                                      | Example         |
| -          | :-                                               | :-              |
| label      | A static text label for the link                 | Edit Page       |
| labelIndex | The property which holds the text value          | `category.name` |
| dataIndex  | Where the link should go                         | `category.url`  |
| icon       | If an Icon should display before the text        | `home`          |
| newTab     | If should open in a new tab (defaults to `true`) | `false`         |

```php
[
    'title' => 'Category',
    'type' => 'LinkColumn',
    'dataIndex' => 'category.url',
    'labelIndex' => 'category.name',
    'icon' => 'groups',
    'newTab' => true,
]
```

## Edit Link

For usability we like to make the entry name a clickable link to take you to the edit page, so we recommend using this as your first column type for the entry name field. e.g.

#### Type: `EditLinkColumn`

```php
[
    'title' => 'Name',
    'type' => 'EditLinkColumn',
    'dataIndex' => 'post_name',
]
```

## Video

When using the video input you can display a small thumbnail and link to it in the listings.

#### Type: `VideoColumn`

```php
[
    'title' => 'Instructional Video',
    'type' => 'VideoColumn',
    'dataIndex' => 'video',
]
```

## Image

When using the image input you can display a small thumbnail and link to it to the full size.

#### Type: `VideoColumn`

```php
[
    'title' => 'Instructional Video',
    'type' => 'VideoColumn',
    'dataIndex' => 'video',
]
```

## Icon

Often you might want to display an icon to represent something, you can use the [entry transformer](../advance/entry-transformer.md) to provide the name of the icon to display.

#### Type: `IconColumn`

```php
[
    'title' => 'Type',
    'type' => 'IconColumn',
    'dataIndex' => 'type_icon',
]
```

## Boolean

To display either a tick or a cross based of a boolean you can use the boolean column.

#### Type: `BooleanColumn`

## Media Manager

The media manager column allows you to display 1 or more thumbnails for some uploaded media. However (sorry) to avoid performance issues you must use the [entry transformer](../advance/entry-transformer.md) to return back URLs to display, if you do not transform this data you will just see the IDs of the attached media.

#### Type: `MediaManagerColumn`

| Property | Description            | Example |
| -        | :-                     | :-      |
| max      | Maximum assets to show | 2       |

```php
[
    'title' => 'Photos',
    'type' => 'MediaManagerColumn',
    'dataIndex' => 'photo_urls',
    'max' => 3,
]
```
