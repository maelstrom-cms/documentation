# Installing

Maelstrom comes in 2 parts:

- Laravel Toolkit - provided by Composer
- React Components - provided by NPM

You will need both of these to get started.

```sh
composer require maelstrom/toolkit
```

and

```sh
npm i @maelstrom-cms/ui -D

# or with yarn
yarn add @maelstrom-cms/ui -D
```

## Fresh Install

Once both components are installed you will need to register them in your application.

### Javascript & CSS Components

You are free to use what ever build/asset pipeline you like, however out of the box we use Laravel Mix.

Open your `webpack.mix.js` file and make sure you include the following...

```js
// Import Mix again - this time aliased, we need to keep this separate from your frontend `mix` instance.
const maelstrom = require('laravel-mix')

// Imports our React Components
maelstrom.react('@maelstrom-cms/ui/js/maelstrom.js', 'public/js')

// Compiles all our custom CSS
maelstrom.sass('@maelstrom-cms/ui/js/maelstrom.sass', 'public/css')

// Enables Tailwind (you might need to merge this into an existing .options) - If you have a custom config you can pass it in of course.
maelstrom.options({
    postCss: [
        require('tailwindcss')()
    ]
})
```

When you now run `yarn run dev` you should have a `maelstrom.css` and `maelstrom.js` inside your `public/js` and `public/css` folder.

::: tip
If you want to use a different output directory just make sure you update the `core_js_path` and `core_css_path` option in the `config/maelstrom.php` later on.
::: 

### PHP Components

There is not much you need to do to set up the PHP side of things, you should however publish the config to change various things.

```sh
php artisan vendor:publish --tag maelstrom-config
```

If you're going to use the Media Manager then you'll need to run the migrations.

```sh
php artisan db:migrate
```

## Adding to existing project

Just do the same as above!
