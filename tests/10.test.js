import getCoins from '../src/10';

describe('Get coins needed to sum', () => {
  test('1 coin 50 cents and 1 coin of 1 cent', () => {
    expect(getCoins(51)).toStrictEqual([1, 0, 0, 0, 0, 1]);
  });
  test('1 coin 1 cent and 1 coin of 2 cents', () => {
    expect(getCoins(3)).toStrictEqual([1, 1, 0, 0, 0, 0]);
  });
  test('1 coin 5 cents', () => {
    expect(getCoins(5)).toStrictEqual([0, 0, 1, 0, 0, 0]);
  });
  test('1 coin 1 cent and 1 coin 5 cents and 1 coin 10 cents', () => {
    expect(getCoins(16)).toStrictEqual([1, 0, 1, 1, 0, 0]);
  });
  test('2 coins 50 cents', () => {
    expect(getCoins(100)).toStrictEqual([0, 0, 0, 0, 0, 2]);
  });
});
