# Authentication

We're going to have to break this one to you gently.

We do not provide any authentication UI - this is not what Maelstrom is about, we're a toolkit helping you fill the gaps to create complicated interfaces.

Laravel comes with it's own authentication scaffolding, and one of our aims is to utilise as much of vanilla Laravel as possible, this means no authentication scaffolding from us.

You can use what ever system you like, even just `php artisan make:auth`.

### Middleware and Guards

Just because we do not handle your login/reset process - that doesnt mean we do not integrate with any authentication!

You have a couple of considerations

- Your application specific routes.
- Built in features such as the media manager.

#### Application Routes

Protecting your application routes is done in exactly the same way as any other laravel project, e.g. You might decide you want to use a route group with some middleware.

```php
// Protected by the "auth" middleware
Route::prefix('/admin')->middleware('auth')->group(function () {

    Route::resource('pages', 'Admin\PageController');
    Route::resource('users', 'Admin\UserController');
    Route::resource('categories', 'Admin\CategoryController');
    Route::resource('tags', 'Admin\TagController');
    Route::resource('products', 'Admin\ProductController');
    Route::resource('reviews', 'Admin\ReviewController');
});
```

#### Maelstrom Routes

We default to protecting any routes by using the `auth` guard.

This can be configured within the `config/maelstrom.php`.

There's 3 sections which can have guards assigned to them

- auth
- form_options
- media_manager

Each of these can use different pieces of middleware to protect them, simply provide the name of the middleware or a class e.g. `\App\Http\Middleware\MediaManagerGuard::class`

```php
'media_manager' => [
    /*
     * If you need to protect this endpoint at route level
     * you can provide some middleware, which can abort(401) the request.
     */
    'guard' => \App\Http\Middleware\MediaManagerGuard::class,
```
