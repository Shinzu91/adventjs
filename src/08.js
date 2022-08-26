export default function maxProfit(prices) {
  let minPrice = 0;
  let maxPriceRightFromMin = 0;

  prices.forEach((price) => {
    if ((price < minPrice && minPrice > maxPriceRightFromMin) || minPrice === 0) {
      minPrice = price;
      maxPriceRightFromMin = 0;
      return;
    }
    if (price > maxPriceRightFromMin && price > minPrice) {
      maxPriceRightFromMin = price;
    }
  });

  if (maxPriceRightFromMin === 0) {
    return -1;
  }

  return maxPriceRightFromMin - minPrice;
}
