# Introduction

#### Welcome to Maelstrom.

Maelstrom is very different from many other CRUD/CMS systems that are kicking about, it's most similar counterpart is most likely our good friends [Backpack for Laravel](https://backpackforlaravel.com/).

<img src="/hero.jpg" class="w-full shadow" />

#### The key differences between Maelstrom any many others will be:

- Modern frontend tooling via React, Tailwind and Webpack (mix),
- No fully integrated controllers/models,
- No bundled frontend like Bootstrap,
- Completely customisable layouts,
- Extremely easy to add your own custom inputs,
- Highly extendable / over-writable components and methods,
- Everything is designed to be changed,
- Use what you want, ignore what you like,
- A super simple media manager,
- Ability to add components anywhere within your app, frontend, backend etc... using Blade or React.

#### There's a handful of key concepts Maelstrom tries to follow:

- Everything must be over-writable,
- Nothing must be forced,
- Only use what you need.
- Keep to the default Laravel patterns e.g. Controllers, Models and Views. 

## How it works

We have a single God class, of which every method is publicly exposed (allowing customisation) providing you a whole range of helper methods to easily handle your data.

Controllers are based on on Laravel's resourceful controllers and use all of the default methods (maybe minus the `show` method - this is up to you).

Models are your normal models, nothing special needed apart from exposing the `protected $fillable` property.

Views are all regular blade templates with sprinklings of helpers, your own components and layouts.

## Why Not

There are a few times when Maelstrom will not be appropriate for your project e.g.

- If you need a fully integrated plug and play system [(Checkout Nova)](https://nova.laravel.com/).
- If you need a flexible system which comes bundles with tonnes prebuilt UI components, widgets, plugins etc [(Checkout Backpack)](https://backpackforlaravel.com/)..
- If you don't want to use React.
- You don't have the time to create your own layouts.

Any questions then please get in contact with [talk@maelstrom-cms.com](mailto:talk@maelstrom-cms.com)

## Questions and Support

You can email [talk@maelstrom-cms.com](mailto:talk@maelstrom-cms.com) for questions, however if you need code support 
