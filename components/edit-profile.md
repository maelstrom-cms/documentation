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
     * If you need to protect this endpoint at route level
     * you can provide some middleware, which can abort(401) the request.
     */
    'guard' => 'auth',
],
```
