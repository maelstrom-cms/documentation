# Pagination

We use Laravel's built in paginator, so there is not much for you to do. You can however change the default per page.

```php
public function __construct()
{
    $this->panel->setPerPage(20);
}
```

<img src="/pagination-preview.jpg" alt="Preview of pagination" class="shadow m-w-full h-auto mt-4" style="width: 300px;" />
