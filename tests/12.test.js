import getMinJump from '../src/12';

test('Get the min jump number to cross', () => {
  expect(getMinJump([5, 3, 6, 7, 9])).toStrictEqual(4);
  expect(getMinJump([2, 4, 6, 8, 10])).toStrictEqual(7);
  expect(getMinJump([1, 2, 3, 5])).toStrictEqual(4);
  expect(getMinJump([3, 7, 5])).toStrictEqual(2);
  expect(getMinJump([9, 5, 1])).toStrictEqual(2);
});
