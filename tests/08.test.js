import maxProfit from '../src/08';

describe('Get the max profit if found', () => {
  test('Found a profit', () => {
    expect(maxProfit(pricesBtc)).toStrictEqual(16);
    expect(maxProfit(pricesEth)).toStrictEqual(60);
  });
  test('Profit is not found', () => {
    expect(maxProfit(pricesBit)).toStrictEqual(-1);
    expect(maxProfit(pricesDoge)).toStrictEqual(-1);
    expect(maxProfit(pricesAda)).toStrictEqual(-1);
  });
});

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesEth = [10, 20, 30, 40, 50, 60, 70];
const pricesBit = [6, 5, 4, 3, 2, 1];
const pricesDoge = [18, 15, 12, 11, 9, 7];
const pricesAda = [3, 3, 3, 3, 3];
