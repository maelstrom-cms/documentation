# Image Uploadables

Image uploadables are the same as normal uploadables, however they show a thumbnail of the image.

They also allow you to resize and crop the uploaded images.

```php
public function __construct()
{
    $this->panel->setUploadables([
        'thumbnail' => [
            'disk' => 'public',
            'resize' => [300, 300],
            'crop' => [100, 100],
        ],
        'hi_resolution' => [
            'disk' => 'public',
            'resize' => [1280, 720],
        ],
    ]);
}
```

::: warning
When using an image uploader, you should return the URL of the uploaded image so that it can display a thumbnail - you can do this using an Entry Transformer
:::
