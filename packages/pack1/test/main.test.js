const { calc } = require('..');

describe('test suite', function() {
  test('calcs correctly', function() {
    expect(calc(10)(20)).toEqual(30);
  });
});
