# GitLab CI config

A simple Gitlab CI config for front end projects.

## Table of contents
- [Features](#Features)
- [Getting started](#Getting-started)
  - [Prerequisites](#Prerequisites)
  - [Running the sample project locally](#Running-the-sample-project-locally)
- [Usage](#Usage)
- [Built with](#Built-with)
- [License](#License)

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


### Prerequisites

- GitLab account and repository

You will need a [GitLab](https://about.gitlab.com/) account to use the GitLab runner for CI.

Next you'll need to set up a repository on GitLab. If your source code is hosted on GitLab and has the `.gitlab-ci.yml` file, CI will work automatically. But if it's hosted elsewhere, such as on GitHub, you'll need to connect it to your GitLab repository. Please see the instructions on [GitLab CI/CD for external repositories](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/github_integration.html).

### Running the sample project locally

Please see the [sample project README](sample-project-README.md).

**Please note that the Git Hook has been removed in this version of the project.**


## Usage

1. Make a small change to the sample project. For example, add a new test or some functionality. For example, add a failing test in `src/App.test.jsx`.

2. Commit the change.

3. Push.

The GitLab CI should run and follow the instructions in the `.gitlab-ci.yml` file. In this case it will check to see if all tests pass and if the project builds successfully.


## Built with
- [GitLab CI](https://about.gitlab.com/product/continuous-integration/)
- Also see the [sample project README](sample-project-README.md) for information on what it was built with.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
