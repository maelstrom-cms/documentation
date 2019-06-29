# Tailwind

We use the default Tailwind CSS config to help control the layouts within your application.

This gives you un-opinionated granular control over your application, making the smallest of tweaks with ease.

There are 3 ways you can manage the CSS processing.

- Use your own pipeline e.g. Gulp
- [Laravel Mix](#laravel-mix)
- [Tailstrom](#tailstrom)

### Laravel Mix

::: danger
If you are also using Tailwind for your project then you might face certain conflicts as Mix doesn't have the ability to process 2 different Tailwind configs, read our **[Tailstrom](#tailstrom)** section to find out how to solve this.
:::

Maelstrom uses PostCSS *(as this powers Tailwind)* which means you'll need to process your CSS somehow, the easiest way is via Laravel Mix by using the following snippet (taken from the Tailwind website)

```js
mix.postCss('node_modules/maelstrom/css/maelstrom.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
]);
```

This will save the `maelstrom.css` to `public/css/maelstrom.css` which is the default within the `config/maelstrom.php` - You can change both of these to what ever suits you.


### Tailstrom (Quick Start)

#### Resolving conflicts with multiple Tailwind configs and Laravel Mix

By default Tailwind doesn't need a config file published, it will use the defaults. This is what we use - but if your project has a Tailwind config then when you compile Maelstrom it will include your custom config instead.

To resolve this issue, we provide a standalone CSS compiler which just imports Tailwind and exports it to a file. You can either export this file and have Mix process it again e.g. to use `mix.version()` or you can leave the file as it is.

To export the CSS you can run

```bash
npx tailstrom -o public/css/maelstrom.css
```

You have 2 other additional options **(type npx tailstrom --help for full listing)**

```bash
# Pass in a custom Tailwind config
npx tailstrom -c tailwind.backend.js
```

You can also choose not to minify the CSS with 

```bash
# Disable minification
npx tailstrom --minify=false
```

Once your CSS has exported everything else should be as normal, you can leave the React entries within your Mix config.
