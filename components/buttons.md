---
pageClass: big-toc
---

# ⚒ Buttons

The concept of buttons is pretty straight forward, it allows you to create a styled button with ease, passing in some configuration options.

A button can be used as either:

- A Link
- A Button

::: tip
You don't **need** to use this - you can just copy the applied CSS classes from another button to style them accordingly e.g. `antd-button` - however this just does a lot of the work for you.
:::

### Available Buttons

[[toc]]

## Button

You can include a traditional `<button>` element with some additional properties e.g

<img src="/buttons-preview.jpg" class="m-w-full h-auto my-2" style="width: 350px;" />

```php
@include('maelstrom::buttons.button', [
    'style' => 'primary', // primary, default, dashed, danger
    'label' => 'Click here!',
    'name' => 'clicked_here', // The "name" attribute of the button
    'help' => 'If you click this button, things will happen',
    'html_type' => 'submit', // submit, button
    'icon' => 'upload', // Any icon from Ant Design Icons
])
```

## Link Button

If you need a link `<a>` that looks like a button, then you just pass a `url` prop.

```php
@include('maelstrom::buttons.button', [
    'style' => 'primary', // primary, default, dashed, danger
    'label' => 'Click here!',
    'url' => route('pages.create'),
])
```

## Form Controls

## Nested Resources

## Media Manager
