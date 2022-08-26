import checkSledJump from '../src/15';

describe('Check if get up and down strictly', () => {
  test('Has strict up and down', () => {
    expect(checkSledJump([1, 2, 3, 2, 1])).toBeTruthy();
    expect(checkSledJump([0, 1, 0])).toBeTruthy();
    expect(checkSledJump([0, 3, 2, 1])).toBeTruthy();
    expect(checkSledJump([0, 1000, 1])).toBeTruthy();
  });
  test('Is not strict', () => {
    expect(checkSledJump([2, 4, 4, 6, 2])).toBeFalsy();
    expect(checkSledJump([1, 2, 3])).toBeFalsy();
    expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBeFalsy();
  });
});
