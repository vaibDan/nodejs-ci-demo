const add = require('../src/app');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
