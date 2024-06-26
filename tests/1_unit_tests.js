const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
    // #1
    test('#isNull, #isNotNull', function () {
      assert.isNull(null, 'null should be null');
      assert.isNotNull(1, '1 is not null');
    });
  });
});
