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

## Video Tutorials

Below we have a small selection of videos showing how to use various features whilst creating a blog, there is between 1 and 2 hours worth of content.

> Excuse the bad microphone! 😇

### Getting Started

Learning how to install and configure Maelstrom.

<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/xr9c_4uVvsc?modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

### Creating a Category Panel

A very simple panel to help you get to grips with the code structure.

<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/bwOZrAcSsCQ?modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


### Creating a Posts Panel

A more advance panel with extra fields and features.

<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/c3j_3LUeEQI?modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


### Adding a Sidebar

Managing the sidebar within the control panel.

<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/A07xlbzrbvc?modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>


### Adding Filters

How to create filters for different column types.

<div class="video"><iframe width="560" height="315" src="https://www.youtube.com/embed/4BdcC9eQcDY?modestbranding=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
