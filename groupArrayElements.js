#!/usr/bin/env node
'use strict';

/**
 * This function splits the provided array (`arr`) into sections of length `n`.
 * It does so using the `slice` Array method.
 * @param {Array} arr The array to be split
 * @param {Number} n The size of each split
 */
const groupArrayElements = (arr, n) => {
  // Validate arguments
  if (!Number.isInteger(n)) {
    throw new Error(`n must be an integer. Got: ${n}`);
  } else if (n < 1) {
    throw new Error(`n must be a positive integer. Got: ${n}`);
  } else if (!Array.isArray(arr)) {
    throw new Error(`arr must be an array. Got: ${JSON.stringify(arr)}`);
  }

  // Split arr into new arrays of n length
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
};

if (
  RegExp('node$').test(process.argv[0]) &&
  RegExp('groupArrayElements.js$').test(process.argv[1])
) {
  const arr = JSON.parse(process.argv[2]);
  const n = Number(process.argv[3]);
  const result = groupArrayElements(arr, n);
  console.log(JSON.stringify(result, null, 2));
}
module.exports = groupArrayElements;
