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

```bash

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

## Logging Out

A Logout button is also included - however there is no logic to actually log you out included.

To display the button you must create a controller and a `POST` route called `maelstrom.logout` which handles your logout logic. e.g.

```php
class AdminLogOutController extends Controller
{
    public function __invoke()
    {
        Auth::guard('admin')->logout();

        session()->flash('flash', 'You have been logged out.');

        return redirect()->route('admin.login');
    }
}

Route::post('admin/logout', '/Admin/AdminLogOutController')->name('maelstrom.logout');
```

::: warning
The logout button will also only show if you're logged in using a `auth()->check()` query. If you're using a custom auth guard - We recommend you set this to the default guard via Middleware around your protected routes e.g. `app('auth')->setDefaultDriver('admin');` 
:::
