# TwigEducation_ArrayCodeTest

A small code test about array splitting.

## Installation

Have `node` and `npm` installed on your machine and simply run:

```bash
$ npm i
```

## Running unit tests

To run the unit tests (using `mocha`), simply use the following command:

```bash
$ npm test
```

The tests should run asynchonously and display the results. Tests can be found in [`./groupArrayItems.test.js`](./groupArrayItems.test.js).

## Using the `groupArrayItems` function

The function should be imported into the desired project like so

```js
const groupArrayItems = require('./groupArrayItems');

//or

import groupArrayItems from './groupArrayItems';
```

If you would like to run it as a node executable script, simply do so and provide the arguments as command line arguments ike so (note the quotes around the array):

```bash
$ ./groupArrayItems.js "[1,2,3,4]" 1
```

> Make sure that `node` is available in your PATH to execute files.
