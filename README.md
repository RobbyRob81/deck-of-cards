# Deck Of Cards

>This challenge is not complete and is not functional

## Get up and running

1. clone repo
2. yarn
3. yarn serve

### Misc Commands

* `yarn install` : install depenedencies
* `yarn serve`: run app on localhost:8081
* `yarn build`: build app for production
* `yarn storybook`: run living styleguide
* `yarn storybook:build`: build living styleguide for production
* `yarn test:unit`: Run snapshot and regression tests
* `yarn test:report`: Collect test coverage report and view in browser
* `yarn test:watch`: Update test coverage on the fly
* `yarn lint`: Lint application with prettier

## Living Style Guide

---
We use storybook to bring transparency into the development cycle and to achieve the following:

* Increased velocity
* Streamline the workflow
* Build components in isolation
* Mock hard to reach use cases
* Document use cases as stories
* Share and reuse everything
* Ship with confidence

You can read more about storybook [here](https://storybook.js.org/docs/basics/introduction/).

### Story structure

Each component should have a story for each state.  For example:

* default
* Empty
* Normalized

### Testing

---

* Storybook
* Jest
* addon-storyshots
* storyshots-puppeteer

We use the testing pyramid to ensure we deliver high quality user experiences.  We've automated unit and most integration test cases by using jest, storybook and storyshots.  Our stories generate tests to cover:

* Unit tests (good coverage)
* Integration tests, visual regression
* End-to-end test, cross-browser visual regression

Having React coupled with Storybook and Storyshots, unlocks a different model: the Diamond model.
The diamond model for your UI/App means: little to zero unit tests, massive amount of integration tests, and zero manual tests.

What changed? Integration tests were avoided in the early days because they had a reputation of running slowly; granted — with most technologies this is still very true.

With Jest, React, and Storybook/Storyshots, this is (arguably) no longer the case. No longer must you bring up a browser for each test that leaves its traces in your test environment, or have flaky test suites run and fail randomly, using a not-so-smart test runner that forces you to run everything exactly when you didn’t want to. It’s an era where frontend tooling really does work, and hard becomes easy.

#### Structural Tests

If you already write stories for every component, you already are writing tests, and you just don’t know it yet. Given the thesis above, each of your stories can automatically become a tests:

* Input is your story
* Processing is simply rendering a story (which storybook already does)
* Output is a generated snapshot

And this is what Storyshots does. Storyshots will verify that a React component renders correctly; and if you build multiple stories with a number of different properties then Storyshots can snapshot those as well, and those would be verified on every test run.

 | Test Type | Level | Subject | Solution | Source |
 | --------- | ----- | ------- | -------- | ------ |
 | Browser Regression | Integration | Page/Component | Storyshots | Story |
 | Visual Regression | Integration | Page/Component | Storyshots  | Story |
 | Render | Integration | Page/Component | Storyshots  | Story |
 | Interaction | Unit | Component | Storyshots  | Unit Test |

That said, you should definitely keep your “classic” unit tests for logic, library and domain model code. All these things you put in /lib, external packages that deal with your domain model and so on.

You can read more about it [here](https://medium.com/hiredscore-engineering/how-to-test-a-full-react-app-using-nothing-but-storybook-15f4c584e30a)

#### Commands

* `yarn storybook`, starts storybook at [localhost:9009](http://localhost:9009/)
* `yarn test:unit`, compares updates to image snapshots
* `yarn test:report` view test coverage report in the browser
* `yarn test:watch` update test coverage on the fly

run `yarn storybook` and `yarn test:coverage` in seperate terminals to get instant feedback on regression tests
