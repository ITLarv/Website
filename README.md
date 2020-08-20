This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# CUSTOM THINGS

## Project Structure

The "public" folder contains the most low-level stuff of the project. Like index.html, favicon, homescreen icons, etc. These will rarely need to be edited.

Both the config and scripts folders were automatically created when the React project were "ejected". This enables some custom configuration of the npm-scripts and webpack loaders, etc. But unless you really know what you are doing you shouldn't touch these. They work, keep them that way. Don't fix what ain't broken.

Most of the code you will be changing can be found in the src folder.

The core of the website is the file App.js(x). This contains the CSS, Routing and all pages.

The "pages" folders contains all the pages loaded by the App.js. All routes corresponds to one page file. But one page file can be used by several routes. Example the FAQ pages that look identical except the content of the questions.

The "components" contains all lower-level parts that the pages makes use of. Even if pages sometimes are reused, these ones should be coded for reuseability by themselves or other components. More props and dependencies. For instance the calendar should look identical but with different content depending on which page shows it.

Inside components you also find a Jexpo folder. This is a bit special since Jexpo code needs to be placed inside <iframe>, until proper React components are created by someone smart. The files inside this folder is basically just raw html strings. The catalog.js page shows an example of how it can be used for simplicity.

## CSS/SASS/SCSS

This project is using SASS/SCSS for css handling.
Best tip is to use Visual Studio Code when changing CSS and installing the Extension ´Live Sass Compiler´.
Then make sure to activate "Watch Sass" in the bottom window toolbar before start editing any CSS.
The result CSS file will be a minified version inside the css-folder. This should be imported in the App.js(x) file.
App.css is also automatically created, but is mostly for readability if someting behaves unexpectedly.

NOTE: ONLY the .scss files should be edited together with a sass compiler. Any other code will be overridden.

## Tests

Yes, this project really _should_ contain tests. Any day now. It's the next thing on my TODO ™
