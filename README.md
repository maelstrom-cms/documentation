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

```bash
// posts.index.blade.php
@extends('maelstrom::layouts.index', [
    'columns' => [
        [
            'label' => 'Name',
            'name' => 'post_name',
            'type' => 'EditLinkColumn',
            'sortable' => true,
            'searchable' => true,
        ],
        [
            'label' => 'Featured',
            'name' => 'is_featured',
            'type' => 'BooleanColumn',
            'align' => 'center',
        ],
    ]
])
```

```bash
// posts.form.blade.php
@extends('maelstrom::layouts.form')

@section('content')
    @component('maelstrom::components.form', [
        'action' => $action,
        'method' => $method,
    ])
    
        @include('maelstrom::inputs.text', [
            'label' => 'Post Name',
            'name' => 'post_name',
            'required' => true,
        ])
        
        @include('maelstrom::inputs.text', [
            'label' => 'Post Slug',
            'name' => 'slug',
            'required' => true,
            'html_type' => 'url',
        ])
        
        @include('maelstrom::inputs.wysiwyg', [
            'label' => 'Post Body',
            'name' => 'body',
            'required' => true,
        ])
        
        @include('maelstrom::inputs.switch', [
            'label' => 'Featured on Homepage?',
            'name' => 'is_featured',
        ])
        
        @include('maelstrom::components.media_manager', [
            'label' => 'Header Image',
            'name' => 'header_image',
            'max_items' => 1
        ])
    
    @endcomponent
    
@endsection
```
