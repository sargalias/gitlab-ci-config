# GitLab CI config

A simple Gitlab CI config for front end projects.

## Features

  - Node Alpine image (faster runs because it's smaller than the full Node image).
  - Node latest image (commented out).
  - `npm ci` command used for installing packages (faster and more reliable than `npm install` for CI). Also caches the .npm directory.
  - `npm run test` command to run all tests.
  - Collects test coverage from Jest as an artifact, making it available to download.
  - `npm run build` command to build the project for production.
  - Cypress tests commented out as a separate instance is needed to serve the running project for Cypress tests to work.
  - A sample project to run the CI on.

## Getting started

The main file you need from this project is the `.gitlab-ci.yml` file. The rest of the project is here so the CI has something to run against.

Along with that, the scripts used in `.gitlab-ci.yml` need to be valid and do the correct things in your project. In the example project we have a `package.json` file with scripts for:
  - `test`
  - `build`

You will also need a [GitLab runner](https://docs.gitlab.com/runner/).

For more information, please see the official [GitLab CI documentation](https://docs.gitlab.com/ee/ci/README.html).

