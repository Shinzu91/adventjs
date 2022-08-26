const coins = [1, 2, 5, 10, 20, 50];

const countTimes = (coin, changeRemaining) => {
  if (coin > changeRemaining) {
    return 0;
  }

  const times = 1;
  return times + countTimes(coin, changeRemaining - coin);
};

export default function getCoins(change) {
  const result = [];
  coins
    .slice()
    .reverse()
    .forEach((element, key) => {
      const times = countTimes(element, change);
      change = change - times * element;
      result[key] = times;
    });
  return result.reverse();
}
