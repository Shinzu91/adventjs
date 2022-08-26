import wrapGifts from '../src/13';

describe('Wrap gifts of emojis', () => {
  test('Wrap an array of 1 emoji', () => {
    expect(wrapGifts(['📷', '⚽️'])).toStrictEqual(['****', '*📷*', '*⚽️*', '****']);
  });
  test('Wrap an array of 2 emoji', () => {
    expect(wrapGifts(['🏈🎸', '🎮🧸'])).toStrictEqual(['******', '*🏈🎸*', '*🎮🧸*', '******']);
  });
  test('Wrap 1 emoji', () => {
    expect(wrapGifts(['📷'])).toStrictEqual(['****', '*📷*', '****']);
  });
  test('No wrap when empty', () => {
    expect(wrapGifts([])).toStrictEqual([]);
  });
});
