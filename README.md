# General

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It was since ejected.

## Start development server

Make sure you got npm and Node installed. Install the dependencies and start.

```console
$ npm install
$ npm start
```

# CUSTOM THINGS

## Project Structure

The "public" folder contains the most low-level stuff of the project. Like index.html, favicon, homescreen icons, etc. These will rarely need to be edited.

Both the config and scripts folders were automatically created when the React project were "ejected". This enables some custom configuration of the npm-scripts and webpack loaders, etc. But unless you really know what you are doing you shouldn't touch these. They work, keep them that way. Don't fix what ain't broken.

Most of the code you will be changing can be found in the src folder.

The core of the website is the file App.js(x). This contains the CSS, Routing and all pages.

The "pages" folders contains all the pages loaded by the App.js. All routes corresponds to one page file. But one page file can be used by several routes. Example the FAQ pages that look identical except the content of the questions.

The "components" contains all lower-level parts that the pages makes use of. Even if pages sometimes are reused, these ones should be coded for reuseability by themselves or other components. More props and dependencies. For instance the calendar should look identical but with different content depending on which page shows it.

Inside components you also find a Jexpo folder. This is a bit special since Jexpo code needs to be placed inside \<iframe\>, until proper React components are created by someone smart. The files inside this folder is basically just raw html strings. The catalog.js page shows an example of how it can be used for simplicity.

## CSS/SASS/SCSS

This project is using SASS/SCSS for css handling.
Best tip is to use Visual Studio Code when changing CSS and installing the Extension ´Live Sass Compiler´.
Then make sure to activate "Watch Sass" in the bottom window toolbar before start editing any CSS.
The result CSS file will be a minified version inside the css-folder. This should be imported in the App.js(x) file.
App.css is also automatically created, but is mostly for readability if someting behaves unexpectedly.

NOTE: ONLY the .scss files should be edited together with a sass compiler. Any other code will be overridden.

## Tests

Yes, this project really _should_ contain tests. Any day now. It's the next thing on my TODO ™

# LICENSE

This project is licensed under the MIT license.

# Hosting (Sponsored by Vercel)

The website is hosted using [Vercel](https://vercel.com?utm_source=larv-website&utm_campaign=oss). The master (alpha) branch can be found on [dev.larv.org](https://dev.larv.org). Staging (beta) on [staging.larv.org](https://staging.larv.org). The production is [larv.org](https://larv.org).

Everything is deployed automatically using Webhooks.

[![Powered by Vercel](./powered-by-vercel.svg)](https://vercel.com?utm_source=larv-website&utm_campaign=oss)
