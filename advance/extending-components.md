# Extending Components

If you want to make your own component which is based off a Maelstrom component you can easily do so, we use Reacts Class API which means you can easily extend it, make your changes and register that instead!

There's 3 steps you'll need to take

- Create your component
- Register it
- Create a blade include

### Creating your extended component
```js
import TextInput from '@maelstrom-cms/js/fields/TextInput'

class CurrencyInput extends TextInput
{
    renderPrefix = () => {
        return '£'
    }
}
```

### Registering your component

Before any custom components become available you'll need to add them to the registry by importing it, then using the `register` method.

```js
import CurrencyInput from '/my-components/CurrentyInput'
import Registry from '@maelstrom-cms/js/support/Registry'

Registry.register({
    CurrencyInput,
});
```

::: warning
Make sure you've added your custom javascript path to `config/maelstrom.php` 
:::

### Creating a blade include

You'll want to be able to include your component within your blade templates, so we'll create an include which you can reference e.g.

```php
@include('my-components.currency')
```

Then you'll need your file itself e.g. `resources/views/my-components/currency.blade.php`

The anatomy is fairly straight forward, you provide a `div` that has several properties attached, below is a list of recommended props and how to get them, however you can do this however you see fit.

```php
@php $entry = $entry ?? maelstrom()->getEntry(); @endphp

<div
    id="{{ $name }}_field"
    data-component="CurrencyInput" // The name of your custom input
    data-value="{{ old($name, data_get($entry, $name, ($default ?? null))) }}"
    data-label="{{ $label ?? $name }}"
    data-name="{{ $name }}"
    data-help="{{ $help ?? null }}"
    data-error="{{ $errors->first($name) }}"
    data-required="{{ bool_to_string($required ?? false) }}"
></div>
```

Your component should now display where ever you `@include` it!

If you get confused by anything, simply look at any of our existing blade includes or components.

