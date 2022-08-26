import fixFiles from '../src/18';

describe('Fix file names', () => {
  test('Fix some files', () => {
    expect(fixFiles(files)).toStrictEqual(['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']);
    expect(fixFiles(files2)).toStrictEqual(['file', 'file(1)', 'file(2)', 'game', 'game(1)']);
    expect(fixFiles(files3)).toStrictEqual(['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']);
  });
  test('No files to fix', () => {
    expect(fixFiles(files4)).toStrictEqual(['file', 'icon']);
  });
});

const files = ['photo', 'postcard', 'photo', 'photo', 'video'];
const files2 = ['file', 'file', 'file', 'game', 'game'];
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)'];
const files4 = ['file', 'icon'];
