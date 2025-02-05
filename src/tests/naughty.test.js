// This file contains words that some may find disturbing.

const naughty = require('../naughty');

test('naughty word detector', () => {
  expect(naughty('griffpatch')).toBe(true);
});

test('metrics', () => {
  expect(naughty.getTotalBlockedPhrases()).toBeGreaterThan(0);
  expect(naughty.getTotalFilterLists()).toBeGreaterThan(0);
});
