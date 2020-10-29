#!/usr/bin/env node
'use strict';

/**
 * This function splits the provided array (`arr`) into sections of length `n`.
 * It does so using the `reduce` Array method.
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
};

module.exports = groupArrayElements;
