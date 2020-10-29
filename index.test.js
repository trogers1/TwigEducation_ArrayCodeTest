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
      assert.doesNotThrow(() => groupArrayItems([1, 2, 3, 4], 1));
    });
    it('=> should throw an error if arr arg is not an array', () => {
      assert.throws(() => groupArrayItems('[]', 2));
      assert.throws(() => groupArrayItems(3000, 2));
      assert.throws(() => groupArrayItems(true, 1000));
      assert.throws(() => groupArrayItems({}, 1));
    });
  });
  describe('should accurately return the desired result', () => {
    it('=> should return the correct result when N is greater than array length', () => {
      assert.deepStrictEqual(() => groupArrayItems([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
    });
  });
});
