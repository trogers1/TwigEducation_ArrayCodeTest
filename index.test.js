const groupArrayItems = require('./index');
const assert = require('assert');

describe('groupArrayItems', () => {
  describe('should throw an error for invalid input', () => {
    it('=> should throw an error if N arg is negative', () => {
      assert.throws(() => groupArrayItems([1, 2, 3, 4], -1));
    });
    it('=> should throw an error if N arg is not an integer', () => {
      assert.throws(() => groupArrayItems([1, 2, 3, 4], 3.4));
      assert.throws(() => groupArrayItems([1, 2, 3, 4], '4'));
      assert.throws(() => groupArrayItems([1, 2, 3, 4], 'test'));
      assert.throws(() => groupArrayItems([1, 2, 3, 4], true));
    });
  });
});
