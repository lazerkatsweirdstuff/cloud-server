const username = require('../username');

test('isGenerated', () => {
  expect(username.isGenerated('player')).toBe(true);
});
