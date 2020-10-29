const groupArrayItems = require('./index');
const assert = require('assert');

describe('groupArrayItems', () => {
  describe('=> should throw an error for invalid input', () => {
    it('=> should throw an error if N arg is negative', () => {
      assert.throws(() => groupArrayItems([1, 2, 3, 4], -1));
    });
  });
});
