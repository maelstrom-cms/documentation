# Header

It's common that you'll want to modify the header area of your application, this section is just made up of a collection of blade includes which use the waterfall system so you can easily change this to what ever you need.

- `/resources/vendor/maelstrom/partials/header.blade.php`
    - This contains the whole header strip
- `/resources/vendor/maelstrom/partials/header-logo.blade.php`
    - Just the left hand side with the logo
- `/resources/vendor/maelstrom/partials/header-nav.blade.php`
    - Just the right side with the log out buttons 

The `header-nav.blade.php` also houses a

- Log out button
- Edit profile button

It's likely if you want to add more things up here.

<img src="/header-preview.jpg" alt="Preview of header" class="m-w-full h-auto mt-4 shadow-md" />

### Stacks

You have the option to either publish the view and make your modifications, however we provide 2 stacks which you can push additional items to

```php

@push('nav_before')

<div>
    <a href="/">View Website</a>
</div>

@endpush

// and

@push('nav_after')

<div>
    <a href="mailto:help@website.com">Help</a>
</div>

@endpush

```
