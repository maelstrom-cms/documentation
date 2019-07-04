# Alerts & Flash Messages

We have a component to help display Alerts - which can also be used for Flash Messages.

<img src="/flash-preview.jpg" alt="Preview of alerts" class="m-w-full h-auto mt-4" style="width: 500px;" />

### Alerts
To manually include an alert you can include the blade component.

We have 4 styles to choose from:

- `success`
- `info`
- `warning`
- `error`

```bash
@include('maelstrom::components.alert', [
    'message' => 'the message to display to the user',
    'style' => 'info',
]);
```

### Flash Messages
As long as your templates include the `maelstrom::component.flash` component it will automatically parse any flash messages stored under the key of `flash`

You can either pass in a single `message` which will display as `info` style alert or a configuration object that takes a `type` and `message` param.

```php
session()->flash('flash', 'This will display only once.');

session()->flash('flash', [
    'message' => 'This will display only once.',
    'type' => 'error',
]);
```

### Success Messages

By default our `store`, `update` and `destroy` methods will take any messages passed into them, and set them as the flash message with the appropriate styling.

If you want to provide your own flash messages, just do not pass a message into those methods.

```php
// Set a flash message.
$this->panel->update('Success message');

// Don't set a message.
$this->panel->update();
```

