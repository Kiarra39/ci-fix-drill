const { formatCurrency } = require('./formatCurrency');

test('formats currency correctly', () => {
  // formatCurrency returns an object.
  // toEqual must be used for object comparison instead of toBe.
  expect(formatCurrency(10.005, 'USD')).toEqual({
    amount: 10.01,
    currency: 'USD'
  });
});