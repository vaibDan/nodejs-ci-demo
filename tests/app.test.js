const add = require('../src/app');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test("multiplies 2 * 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("subtracts 5 - 3 to equal 2", () => {
  expect(subtract(5, 3)).toBe(2);
});
