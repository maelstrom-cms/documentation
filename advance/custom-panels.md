# Custom / Modified Panels

There may be a time that comes which you need to provide modified Panels to your application.

We've opted for a God Class architecture, this is because it allows the user the maximum amount of control over their Panels. e.g. If we were to use Traits for each set of functionality then you could not easily make the changes, e.g. You can't use the IoC Container on Traits etc. So although maybe controversial - this is for your benefit, we promise!

### Global Custom Panel

If you want every panel to use the same modified panel class, then within the `config/maelstrom.php` you're able to define a custom Panel.

When you now use the `maelstrom()` helper it will return an instance of your custom Panel.

```php
/*
* Although we use the IoC container to allow you to overwrite
* which panel we load, you can also define your custom root panel here.
*/
'panel' => \Maelstrom\Panel::class,
```

If you're not using the `maelstrom()` helper and instead using the container to instantiate your Panels you can just pass in your custom Panel

```php
public function __construct(ContainerInterface $container)
{
    $this->panel = $container->makeWith(MyCustomPanel::class, [
        'query' => (new Page)->query(),
    ]);
}
```

If you love using the IoC container and want to bind a different implementation you can do so inside your `AppServiceProvider.php` by attaching it to the `\Maelstrom\Panel::class`

```php
app()->bind(\Maelstrom\Panel::class, \App\MyCustomPanel::class);
```

### Single Use Custom Panels

Sometimes only a specific model needs a custom panel, e.g. Users - This can be done by creating your own class extending `\Maelstrom\Panel` then providing this to your controller instead.

```php
use \Maelstrom\Panel;

class UserPanel extends Panel
{
    public function applyRelationships()
    {
        //... Your custom overwrites here.
    }
}
```

Then within your controller, use your panel instead e.g.

```php
public function __construct()
{
    $this->panel = maelstrom(User::class, UserPanel::class);
}
```
