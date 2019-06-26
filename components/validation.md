# Validation

We don't do much regards to validation as Laravel has more than enough to keep you happy!

It's straight forward as either using a Request class or the `validate` method on the controllers or even the request!

```php
public function update(PageRequest $request)

// or

public function update(Request $request)
{
    $request->validate([
        'name' => 'required',
    ]);
}

// or

public function update(Request $request)
{
    $this->validate($request, [
        'name' => 'required',
    ]);
}

// etc...
```

We do however offer some frontend help! As Laravel makes `$errors` globally accessible, we just hook into that.

All of our form inputs come with an `error` prop which displays inline with the first error message.

<img src="/inline-v-preview.jpg" alt="Preview of inline validation" class="m-w-full h-auto" style="width: 500px;" />

We also have a component to display a combined set of errors which can be included with

```php
@include('maelstrom::components.validation');
```

<img src="/bulk-v-preview.jpg" alt="Preview of bulk validation" class="m-w-full h-auto mt-4" style="width: 500px;" />
