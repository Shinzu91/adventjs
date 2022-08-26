import sumPairs from '../src/06';

describe('Check the first pair to sum to result', () => {
  test('Check correct pairs', () => {
    expect(sumPairs([3, 5, 7, 2], 10)).toStrictEqual([3, 7]);
    expect(sumPairs([2, 2, 3, 1], 4)).toStrictEqual([2, 2]);
    expect(sumPairs([6, 7, 1, 2], 8)).toStrictEqual([6, 2]);
    expect(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)).toStrictEqual([1, 5]);
  });
  test('Check not found pairs', () => {
    expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull();
    expect(sumPairs([], 1)).toBeNull();
    expect(sumPairs([1, 2], 1)).toBeNull();
  });
});
