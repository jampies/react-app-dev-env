import index from './index';
import assert from 'assert';

describe('index', () => {
  it('should transpile', () => {
    assert.equal(index, 1);
  });
});
