const { calculateDiscount } = require('./calculateDiscount');

test('applies no discount when percent is 0', () => {
  expect(calculateDiscount(100, 0)).toBe(100); // This passes
});

// The function correctly applies a 10% discount.
// The original assertion expected 100, but the correct result is 90.
test('applies 10 percent discount correctly', () => {
  expect(calculateDiscount(100, 10)).toBe(90);
});