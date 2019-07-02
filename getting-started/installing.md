# Installing

Maelstrom comes in 2 parts:

- **Laravel Toolkit** - provided by Composer
- **Javascript Components** - provided by NPM

## Quick Start
We recommend you take the time to read the below [Fresh Install](#fresh-install) as it will help you understand reasoning behind things, however if you already know what it says, then here is a command to help you move faster, by installing all the required packages and scaffolding you some files.

The following will publish a basic:

- `resources/sass/maelstrom.css`
- `resources/js/maelstrom.js`
- `babel.config.js`
- `webpack.mix.js`

If any of these files already exist, then you'll need to manually populate them, or if you don't need them - just delete them and run the command!

::: danger
- This assumes you're on a clean fresh Laravel project with the .env and database setup
- We recommend only running this if you know what you're doing on a new project as it deletes some of your existing files
- Consider changing some of the commands to suit your project.
- This will delete your existing `webpack.mix.js` and `babel.config.js`.
- Not recommended for existing projects.
:::

```sh
npm i && \
npm i @maelstrom-cms/toolkit -D && \
composer require maelstrom-cms/toolkit && \
rm -f webpack.mix.js && \
rm -f babel.config.js && \
php artisan vendor:publish --tag=maelstrom-stubs && \
php artisan vendor:publish --tag=maelstrom-config && \
npm run dev && \
php artisan db:migrate
```

This should have dangerously created some boilerplate for you so you can get started straight away.

::: warning
If you run into problems with `cross-env` try `npm install cross-env`.
:::

## Fresh Install

Firstly we need to install the 2 Maelstrom components...

```sh
composer require maelstrom-cms/toolkit
```

and

```sh
npm i @maelstrom-cms/toolkit -D

# or with yarn
yarn add @maelstrom-cms/toolkit -D
```

::: warning
Depending on your build process, you may need to tweak the below, or use alternative methods, as Mix skips compiling of packages within `node_modules` we've created some work arounds.
:::

### Javascript

As React uses various features that requires Babel to transpile your javascript, you'll need to tell Babel that you're using React. You can do this with a `babel.config.js` in the root of your project, the following contents will work for Maelstrom.

```js
// babel.config.js
module.exports = {
    plugins: [
        '@babel/proposal-class-properties',
    ],
    presets: [
        '@babel/preset-react',
    ],
};
```

You are free to use what ever build/asset pipeline you like, however out of the box we use Laravel Mix, however as Mix bypasses transpilling of the `node_modules` folder we need to bypass this bypass.

#### via the /vendor folder.

If your build process has access to the composer `vendor` folder - you can compile it via the composer path, otherwise you'll need to create a local entry file.

```js
mix.react('vendor/maelstrom-cms/toolkit/ui/js/maelstrom.js', 'public/js')
```

#### via a local entry file

This is a 2-pronged attack, where we create a new entry file, and then tell Mix that we want to compile it.

Create an entry file which includes Maelstrom e.g. `resources/js/maelstrom.js`

```js
// resources/js/maelstrom.js
require('@maelstrom-cms/toolkit');
```

Then we need to tell Mix that we want to compile it - We provide a helper to do this, although if you're already doing it for something else you'll need to make sure `@maelstrom-cms` isn't excluded.

```js
// webpack.mix.js
mix.react('resources/js/maelstrom.js', 'public/js');

mix.webpackConfig({
    module: {
        rules: [require('@maelstrom-cms/toolkit/js/support/DontIgnoreMaelstrom')()],
    },
});
```

Now when you run `npm run dev` it should compile okay!

### CSS Components

As Tailwind uses PostCSS to compile, you'll need to use a pipeline that supports that, with mix you can do this via the `.postCss` method.

#### via the /vendor folder.

If your build process has access to the composer `vendor` folder - you can compile it via the composer path, otherwise you'll need to create a local entry file.

```js
mix.postCss('vendor/maelstrom-cms/toolkit/ui/css/maelstrom.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
])
```

#### via a local entry file

If you do not have access to the `vendor` directory you can create an entry file (you can put this file anywhere) - but it must end in `.css` for PostCSS to work.

Create a `.css` file with the following contents

```css
@import '@maelstrom-cms/toolkit/css/maelstrom.css';
```

Then load it into Mix

```js
mix.postCss('resources/sass/maelstrom.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
])
```

When you now run `npm run dev` you should have a `maelstrom.css` and `maelstrom.js` inside your `public/js` and `public/css` folder.

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
