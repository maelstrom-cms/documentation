# Edit Profile

We give you a really simple edit profile page to use, this is based off the provided fields from the default laravel install.

<img src="/profile-preview.jpg" alt="Preview of edit profile" class="shadow m-w-full h-auto mt-4" style="width: 600px;" />

To enable the page you must first make sure it's turned on within the `config/maelstrom.php` - You can also make various other changes to this configuration.

```php
/*
 * If you need some basic authentication, we've got some bits for you.
 * Use as much or as little as you need.
 */
'auth' => [
    /*
     * If you want the built in authentication features,
     * set to false if you want to disable it.
     */
    'enabled' => true,

    /*
     * We use the current user in "some" places - mostly on the
     * "edit my account" page, if you use the built in controller
     * then you can change the model here.
     */
    'model' => \App\User::class,

    /*
     * If your using a custom auth guard, you can define it here.
     */
    'guard' => null,

    /*
     * If you need to protect this endpoint at route level or anything else
     * you can provide some middleware, which can abort(401) the request.
     */
    'middleware' => ['web'],
],
```

Once enabled you need to set up a route for it, we do not automate this as we don't know where you want it to go, or you might want a customised one.

```php
Route::get('/admin/edit-account', '\Maelstrom\Http\Controllers\EditAccountController')->name('maelstrom.edit-account');
Route::put('/admin/edit-account', '\Maelstrom\Http\Controllers\EditAccountController@update');
```

::: danger
Make sure you give the route a name of `maelstrom.edit-account` otherwise some of the automation won't work.
:::

### Customising the Controller

As you've defined your own route, you can point the route at your own controller, you can either completely overwrite it or extend it e.g.

```php
use \Maelstrom\Http\Controllers\EditAccountController;

class MyEditAccountController extends EditAccountController
{
    public function __invoke()
    {
        return view('edit-account');
    }
}
```

### Customising the Form

The form still uses the waterfall system, which means if you want to change the form you can publish it into `/resources/vendor/maelstrom/templates/edit-account.blade.php` and make any adjustments you like. By default it is pretty simple.

```php
@extends('maelstrom::layouts.form')

@section('content')
    @component('maelstrom::components.form', [
        'action' => $action,
        'method' => $method,
    ])

        <h2 class="cloak">Account information</h2>

        @include('maelstrom::inputs.text', [
            'label' => 'Full name',
            'name' => 'name',
            'required' => true,
        ])

        @include('maelstrom::inputs.text', [
            'label' => 'Email address',
            'name' => 'email',
            'html_type' => 'email',
            'required' => true,
        ])

        <h2 class="cloak">Security</h2>

        @include('maelstrom::inputs.secret', [
            'label' => 'Change password',
            'name' => 'new_password',
            'help' => 'Only enter your password here if you want to change it.',
            'autocomplete' => 'new-password'
        ])

        @slot('buttons')
            <div class="mt-6">
                @include('maelstrom::buttons.save')
            </div>
        @endslot

    @endcomponent
@endsection
```
