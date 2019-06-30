# Overwriting Components

### Blade

We use the the methods described on the [Laravel Docs](https://laravel.com/docs/5.8/packages#views) to register our views, which allows them to be overwritten with custom ones by following a naming convention. This means you should place all your overwritten blade templates within

```
/resources/views/vendor/maelstrom
```

This means if you use a blade directive e.g.

```php
@include('maelstrom::inputs.text')
```

and you want to overwrite the field for **EVERYTHING** then you should add your own into the same folder structure e.g.

```
/resources/views/vendor/maelstrom/fields/text.blade.php
```

### React

If you want to overwrite one of our react components, you just need to register a new component with the same name.

You can find all existing blade templates in the root directory of `/vendor/maelstrom/toolkit/src/views/`

You can find out the name of a component by opening the blade file e.g. if you want to change the text input component you can find

```php
@include('maelstrom::inputs.text', [
    'name' => 'Original Field'
])
```

This will be inside `fields/text.blade.php`

You will notice a param called `data-component` this relates to the react component e.g.

```php
<div
    id="{{ $name }}_field"
    data-component="TextInput"
    data-value="{{ old($name, data_get($entry, $name, ($default ?? null))) }}"
```

We can see this is called `TextInput` so you can create your replacement component in your own javascript e.g. `app.js`

```js
const MyCustomComponent = () => <div>THIS IS MY CUSTOM COMPONENT</div>
```

Once you've defined your component you'll need to add it to the component registry.

You can do this by importing it, then passing an object into it with the name of the component your defining, then a reference to the component itself.

```js
import Registry from '@maelstrom-cms/js/support/Registry'

const MyCustomComponent = () => <div>THIS IS MY CUSTOM COMPONENT</div>

Registry.register({
    TextInput: MyCustomComponent,
    // ^^ The name of the component you're overwriting
});
```

### Modifying Existing Components

If you want to modify specific parts of a component you can do so!

We use Reacts Class API which means you can easily extend it, make your changes and register that instead!

```js
import Registry from '@maelstrom-cms/js/support/Registry'
import TextInput from '@maelstrom-cms/js/fields/TextInput'

class CustomTextInput extends TextInput
{
    renderPrefix = () => {
        return 'Customised!'
    }
}

Registry.register({
    TextInput: CustomTextInput,
});
```

::: warning
Make sure you've added your custom javascript path to `config/maelstrom.php` 
:::
