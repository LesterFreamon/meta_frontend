const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(10)).toBe(15);
    });