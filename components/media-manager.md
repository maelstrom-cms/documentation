# Media Manager

We provide a basic media manager which allows you to easily get started with media management, rather than having a folder stray files you can see exactly what is uploaded and able to manage them.

<img src="/media-browser-preview.jpg" alt="Preview of Media Browser" class="m-w-full h-auto mt-4 shadow-md" style="width: 700px;" />

#### Features
- Searchable
- Tagging
- Thumbnails
- Alt text
- Long descriptions
- Site-wide replacements
- Drag and drop uploads
- Meta data

It also allows you to attach the same media across the site and change all attachments in one go, eventually we'll also introduce some editing tools such as cropping and resizing.

The media manager stores everything within a `maelstrom_media` database table to prevent any conflicts, and exposes itself as `\Maelstrom\Media::class`.

You're able to edit the `config/maelstrom.php` and define an alternative Model if you need to extend it, or use the IoC container to overwrite it when it's resolving.

If you are using your own model make sure to implement the same methods and output formats.

The media manager itself is not a standalone web page - although this can be added if you see fit by including the component on a page and exposing the appropriate props to it.

It manifests itself in the form of a button which when clicked opens the manager and returns back the ID of the media item which can then be saved in the database.

### Including the button

Including the media manager button in your form is the same as any other fields

```bash
@include('maelstrom::components.media_manager', [
    'name' => 'supporting_images',
    'label' => 'Supporting Images',
    'max_items' => '4',
    // ... other options e.g. help, required etc...
])
```

<img src="/photos-preview.jpg" alt="Preview of photo button" class="m-w-full h-auto mt-4 shadow-md" style="width: 700px;" />

### Supported formats

By default we support the uploading of

- Bitmap Images (png, jpg, gif, etc)
- SVG
- PDF

::: warning
Currently we do not support thumbnail generation for PDFs and SVG thumbnails are experimental.
:::

### Changing Accepted Mime Types

You're able to adjust the accepted mime types for the uploader by editing your `config/maelstrom.php` within `media_manager` key.

### Other configurations

From within the `config/maelstrom.php` you're able to control some other options such as

- `enabled` - You can disable the media manager (buttons will still render)
- `guard` - You can set some middleware to prevent access to the API
- `disk` - Which disk should it save the assets to, e.g. S3, Rackspace etc
- `model` - If you want a custom model pass in the FQN of one here
- `mime_types` - Which mime types are allowed to upload
- `thumbnails` - What size to generate the thumbnail at? Should be square for the media manager to render.
- `variations` - Coming soon...

### Setting Up Your Model

You will need to save the ID of the media to your model, our `store` and `update` methods handle this, however you will need to make sure your casts and relationships are configured correctly.

For multiple media attachments within an array make sure you cast the attribute correctly.

#### Casting on The Immediate Model

```php
class Page extends Model
{
    protected $casts = [
        'featured_image' => 'string', 
        'supporting_images' => 'array',
    ];
}
```

#### Relationships on Intermediate Tables.

This is mainly down to you as you can structure your database as you like, however if you want to store the ID or array of IDs on the a relationship, then something like below.

```php
class Page extends Model
{
    public function featuredImage()
    {
        return $this->belongsTo(\Maelstrom\Media::class);
    }

    public function supportingImages()
    {
        return $this->belongsToMany(\Maelstrom\Media::class);
    }
}
```

::: tip
If you're going to do this, make sure you use the `setRelationships()` method on the Panel within the controller to let us know your structure.
:::

#### Within The Repeater
If you're using the repeater then only the ID of the media will be saved within your array, this means when you pull out the data you'll need to convert the IDs into models e.g. Imagine your data was:

```javascript
// `repeater` column in your database.

[
    {
        "id": 1,
        "title": "New product photos."
        "supporting_images": ["12", "43"],
    }
]
```

You would need to convert `supporting_images` into an array of models.

```php
public function getRepeaterContentAttribute()
{
    return array_map(function ($item) {
        $item->supporting_images = \Maelstrom\Media::whereIn('id', $item->supporting_images)->get();

        return $item;
    }, $this->getAttribute('repeater') ?: []);
}
```

Or you could flatten the array to extract all the IDs to reduce the number of queries and re-map them.

```php
public function getRepeaterContentAttribute()
{
    $ids = Arr::pluck($this->repeater, 'supporting_images');
    $ids = Arr::flatten($ids);
    $ids = array_unique($ids);
    $ids = array_values($ids);

    $media = \Maelstrom\Media::whereIn('id', $ids)->get();

    return array_map(function ($item) {
        $item->supporting_images = $media->whereIn('id', $item->supporting_images);

        return $item;
    },  ?: []);
}
```
