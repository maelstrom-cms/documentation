# Uploadables

We provide a couple of field types which allow one off uploads:

- File
- Multiple Files
- Image
- Multiple Images

Although we recommend where possible to use the Media Manager component.

::: warning
Uploadable field types are not currently supported in repeaters due to their JSON constructs.
:::

As file uploads are stored in `$_FILES` and not `$_POST` we need to know which files we need to map to which fields. You can do this by defining the uploadable fields.

```php
public function __construct()
{
    $this->panel->setUploadables([
        'pdf_download' => [
            'disk' => 'public',
        ],
        'attachments' => [
            'disk' => 'public',
        ],
    ]);
}
```

The above example shows that the file uploaded as `$_FILES['pdf_download']` will get stored in the `public` disk.

You can also upload an array of files which would be in a structure similar to

```php
$_FILES['attachments'][0];
$_FILES['attachments'][1];
$_FILES['attachments'][2];
```

If you're going to do this you'll need to make sure you cast the property on the model as an array.

```php
class Page extends Model
{
    protected $casts = [
        'attachments' => 'array',
    ];
}
```

### Custom Upload Handler

If the built in uploader doesn't do what you need, then you can provide a custom upload handler e.g.

```php
public function __construct()
{
    $this->panel->setUploadHandler(function ($uploads, $mappings, $entry, $panel) {
        return PageService::handleUploads($uploads, $mappings, $entry);
    });
}
```

When creating a custom upload handler you must return either a string for a single upload, or an array for a multi uploader.

The string that you return should be the relative path to the uploaded image, excluding the disk. e.g.

```php
    // Multiple
    return [
        'public/image-43.jpg',
        'public/image-334.jpg',
    ];
    
    // Single
    return 'public/image-34.jpg';
```

### Custom Handlers on Classes

If you're extending the `Maelstrom\Panel::class` then instead of using the API to define handlers you can define this methods directly on the class e.g.

```php
class PagePanel extends Panel
{
    public function uploadHandler()
    {
        // ...
    }
}
```
