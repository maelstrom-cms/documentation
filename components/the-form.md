# The Form

The final component to a fully functioning panel is the form.

The way we've designed Maelstrom is so you can have many of the benefits of a structured system, but with the flexibility to create what ever you need. This is why all our inputs are blade directives - so you can layout your page however you see fit.  

You're able to build the form however you like, although we do provide a base template which can be used to kick start your work by using the  `maelstrom::layouts.form` layout. Which you can read about on [the template documentation](./templates.md#form).

### The Component

We provide a very simple `maelstrom::components.form` component which does some boilerplate form for you and things such as the CSRF token and the form buttons.

The only thing you need to pass in the form method, and the form action. e.g.

```php
@component('maelstrom::components.form', [
    'action' => route('page.store'),
    'method' => 'POST',
])
```

::: tip
When the same form template is used for the `create` and `edit` methods you should aim to pass down the `action` and `method` from the controller rather than having inline logic.
:::

### The Input Fields

Once you've got your `<form>` you're able to use our blade includes (along with your own inputs) to create your forms, you have the full tailwind utility classes available so you can layout your form however you want. e.g.


```html
@component('maelstrom::components.form', [
    'action' => route('page.store'),
    'method' => 'POST',
])

<section>
    <h2>Meta Information</h2>
    
    <div class="flex flex-wrap">
        <div class="w-1/2">
            
            @include('maelstrom::inputs.text', [
                'name' => 'title',
                'label' => 'Title',
            ])
            
            @include('maelstrom::inputs.tags', [
                'name' => 'keywords',
                'label' => 'Keywords',
            ])
            
        </div>
        <div class="w-1/2">
            
            @include('maelstrom::inputs.text', [
                'html_type' => 'textarea',
                'name' => 'description',
                'label' => 'Description',
            ])
            
            @include('maelstrom::components.media_manager', [
                'name' => 'open_graph_image',
                'label' => 'Open Graph Image',
            ])
            
        </div>
    </div>
    
</section>

<section>
    <h2>Page Content</h2>
    
    @include('maelstrom::inputs.wysiwyg', [
        'name' => 'excerpt',
        'label' => 'Page Introduction',
    ])
    
</section>

@endcomponent
```

### The Form Controls

We provide some simple form controls, which allow you to save, delete and restore entries, there's nothing really special about this component, so you can create your own save buttons if you like.

When you extend the `maelstrom::layouts.form` it will automatically place them in the `buttons` slot, however if you need to manually include them you can do so with:

```php
@include('maelstrom::buttons.form-controls')
```
