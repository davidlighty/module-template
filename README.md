# module-template

MASTER [![Build Status](https://travis-ci.org/davidlighty/module-template.svg?branch=master)](https://travis-ci.org/davidlighty/module-template)
DEVELOP [![Build Status](https://travis-ci.org/davidlighty/module-template.svg?branch=develop)](https://travis-ci.org/davidlighty/module-template)

Quick template to jumpstart your next npm module or js project. Slightly opinionated with typecheckig using Flow, AirBnb linting styles, and building with Rollup.
The following sections will follow-up on some of these opinons, followed by a references section to allow you to read up on the different projects directly.

**Usage**

1. Clone this repo
2. Copy into your own new repo "@me/newModule"
3. Update:
   1. package.json (module name, author, repository, description)
   2. rollup.config.js (module name)
4. Install yarn
5. Run yarn
6. yarn flow-typed install
7. Run yarn flow init
8. Run yarn test
9. Run yarn build
   1. Should have a lib/index.esm.js file

## Test with Jest

This template suggests using jest and jest theories for testing.

### What are [theories](https://www.npmjs.com/package/jest-theories)?

This is a way to run a single test with multiple inputs. Shortcut looping.

## Build with Rollup

_future section_

## Code with Flow

_future section_

## Eslint / Prettier

_future section_

### References

- [flow](https://flow.org/)
- [flow-typed](https://github.com/flow-typed/flow-typed)
- [jest](https://jestjs.io/)
- [jest-theories](https://www.npmjs.com/package/jest-theories)
- [rollup](https://github.com/rollup/rollup)
- [eslint](https://eslint.org/)
- [prettier](https://github.com/prettier/prettier)
- [travisCI](https://travis-ci.org/)
- [Inspiration article](https://www.grzegorowski.com/publishing-npm-package-with-rollup-babel-and/)
