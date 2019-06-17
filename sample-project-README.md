# Light Bright

[View project](https://sargalias-light-bright.netlify.com)

![Light bright](./screenshot.png)

Light bright is a simple application which simulates the toy "Light Brite". It consists of circles and a few buttons.

- When clicked, the circles are colored in with a unique color.
- Circles that are dragged over are all colored in with the same color.
- Double click erases the color on a circle.
- The buttons erase the last color or all colors, respectively.

## Table of contents

- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the project for development](#running-the-project-for-development)
- [Usage](#usage)
  - [Starting the project](#starting-the-project)
  - [Building the project](#building-the-project)
  - [Running the tests](#running-the-tests)
  - [Code formatting and linting](#code-formatting-and-linting)
  - [Build pipeline](#build-pipeline)
  - [Note about the Git hook](#note-about-the-git-hook)
- [Built with](#built-with)
- [License](#license)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- NPM

Installation requires [NPM](https://www.npmjs.com/) which is included with [Node](https://nodejs.org/). You can install Node by downloading the installer from the website.

To update NPM to the latest version:

```
npm install -g npm@latest
```

### Installation

1. Clone the repo

```
git clone https://github.com/sargalias/light-bright
```

2. Install NPM packages

```
npm install
```

### Running the project for development

```
npm start
```

## Usage

### Starting the project

- Start the project on a local server: `npm start`

### Building the project

- Build the project for production: `npm run build`
- Build the project for development (linting errors won't fail the build): `npm run build:dev`

### Running the tests

- Start the project on a local server along with Cypress (E2E tests): `npm run start-with-cypress`
- Run all tests (Jest and Cypress): `npm run test:all`
- Run Jest tests: `npm test`
- Run Jest tests in watch mode: `npm run test:watch`
- Open Cypress (requires a server running): `npm run cy:open`
- Run all Cypress tests (requires a server running): `npm run cy:run`

### Code formatting and linting

- Format code with [Prettier](https://prettier.io) code formatter: `npm run format`
- Run lint check: `npm run lint`
- Run lint check in fix mode: `npm run lint:fix`

### Build pipeline

- Run the entire build process (code formatting, linting in fix mode, all tests): `npm run ci`

### Note about the Git hook

There is a pretty aggressive Git hook which runs the entire build process for every commit, ensuring linting and tests pass.

The reason for it is because it's preferrable that every commit leaves the project in a working state. That way, reverting to any commit means the project still runs.

However it's not essential, as long as merge commits to **master** / **develop** branches are stable.

If needed, you can disable the Git hook by deleting the **.huskyrc** file, or using the `--no-verify` flag during commits. E.g.

```
git commit --no-verify
```

## Built with

- [React](https://reactjs.org/) - The JavaScript framework used.
- [Webpack](https://webpack.js.org/) - Bundler
- [Babel](https://babeljs.io/) - JavaScript transpiling
- [Jest](https://jestjs.io/) - Test framework
- [React testing library](https://github.com/testing-library/react-testing-library) - Test utilities for React
- [Cypress](https://www.cypress.io/) - End-to-end tests
- [ESLint](https://eslint.org/) - JavaScript static code analysis
- [Stylelint](https://stylelint.io/) - CSS static code analysis
- [Prettier](https://prettier.io/) - Code formatting
- [Husky](https://github.com/typicode/husky) - Simple Git hooks
- [BEM-CSS-Modules](https://github.com/Connormiha/bem-css-modules) - Utility for using CSS modules with BEM.
- [array-shuffle](https://github.com/sindresorhus/array-shuffle) - Utility for shuffling arrays.
- [Classnames](https://github.com/JedWatson/classnames) - Utility for working with CSS classes.
- [typeface-lato](https://github.com/KyleAMathews/typefaces/tree/master/packages/lato) - NPM package for the Lato typeface.
- And many more, particularly plugins and loaders.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
