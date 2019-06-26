# Trash and Soft Deletes

If your model uses the `SoftDeletes` trait, then your Panel has the ability to access the trash and restore deleted models.

By default as soon as you use the `SoftDeletes` trait, the trash will be enabled, if you want to disable it just set `isTrashable` to `false` on the panel.

```php
public function __construct()
{
    $this->panel->isTrashable = false;
}
```

### Accessing the Trash

Once enabled, you will see a small toggle to the right of the table which lets you access the trash.

<img src="/trash-preview.jpg" alt="Preview of trash" class="shadow m-w-full h-auto mt-4" style="width: 300px;" />

You will see it just adds a query string to the URL of `in_trash=1` so you can access this at any time.

### Deleting items

When editing an item, you have the ability to "Delete" an item from the bottom right button.

<img src="/delete-button.jpg" alt="Preview of delete button" class="shadow m-w-full h-auto mt-4" style="width: 140px;" />

### Restoring items

When viewing a deleted item, the Delete button will change into a Restore button.

<img src="/restore-button.jpg" alt="Preview of restore button" class="shadow m-w-full h-auto mt-4" style="width: 140px;" />
