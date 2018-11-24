# module-template

Quick template to jumpstart your next npm module or js project. Slightly opinionated with typecheckig using Flow, AirBnb linting styles, and building with Rollup.
The following sections will follow-up on some of these opinons, followed by a references section to allow you to read up on the different projects directly.

**Usage**

1. Clone this repo
2. Copy into your own new repo "@me/newModule"
3. Update:
4. package.json (module name, author, repository, description)
5. rollup.config.js (module name)
6. Install yarn
7. Run yarn
8. yarn flow-typed install
9. Run yarn flow init
10. Run yarn test
11. Run yarn build
    1. Should have a lib/index.esm.js file

## Test with Jest

This template suggests using jest and jest theories for testing.

### What are [theroies](https://www.npmjs.com/package/jest-theories)?

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
