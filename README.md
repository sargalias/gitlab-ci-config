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
