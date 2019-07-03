---
layout: Home
---

```php
// PostController.php
class PostController extends Controller
{
    protected $panel;
    
    public function __construct()
    {
        $this->panel = maelstrom(Post::class)
    }
    
    public function index()
    {
        return view('posts.index')->with([
            'entries' => $this->panel->getEntries(),
        ]);
    }
    
    public function create()
    {
        return view('posts.form')->with([
            'action' => route('posts.store'),
            'method' => 'POST',
        ]);
    }
    
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
        ]);
        
        $post = $this->panel->store('Woo page created!');
        
        return redirect()->route('posts.edit', $post);
    }
    
    public function edit(Post $post)
    {
        $this->panel->setEntry($post);
        
        return view('posts.form')->with([
            'action' => route('posts.update'),
            'method' => 'PUT',
        ]);
    }
    
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'name' => 'required',
        ]);
        
        $post = $this->panel->update('Your page has been updated!');
        
        return redirect()->route('posts.edit', $post);
    }
    
    public function destroy(Post $post)
    {
        $post->delete();
        
        return redirect()->route('posts.index');
    }
}
```

```php
// posts.index.blade.php
@extends('maelstrom::layouts.index', [
    'columns' => [
        [
            'label' => 'Name',
            'dataIndex' => 'post_name',
            'sorter' => true,
            'type' => 'EditLinkColumn',
            'searchable' => true,
        ],
        [
            'label' => 'Featured',
            'dataIndex' => 'is_featured',
            'type' => 'BooleanColumn',
            'align' => 'center',
        ],
    ]
])
```

```php
// posts.form.blade.php
@extends('maelstrom::layouts.form')

@section('content')
    @component('maelstrom::components.form', [
        'action' => $action,
        'method' => $method,
    ])
    
        @include('maelstrom::inputs.text', [
            'name' => 'post_name',
            'label' => 'Post Name',
            'required' => true,
        ])
        
        @include('maelstrom::inputs.text', [
            'name' => 'slug',
            'label' => 'Post Slug',
            'required' => true,
            'html_type' => 'url',
        ])
        
        @include('maelstrom::inputs.wysiwyg', [
            'name' => 'body',
            'label' => 'Post Body',
            'required' => true,
        ])
        
        @include('maelstrom::inputs.switch', [
            'name' => 'is_featured',
            'label' => 'Featured on Homepage?',
        ])
        
        @include('maelstrom::components.media_manager', [
            'name' => 'header_image',
            'max_items' => 1
        ])
    
    @endcomponent
    
@endsection
```
