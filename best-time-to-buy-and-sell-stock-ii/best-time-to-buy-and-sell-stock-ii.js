/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let isBought = false;
  let buyAccount = 0;

  const profit = prices.reduce((profit, price, currentIndex) => {
    if (!isBought && price < prices[currentIndex + 1]) {
      isBought = true;
      buyAccount = price;

      return profit;
    }

    if (isBought && price > prices[currentIndex + 1]) {
      isBought = false;

      return profit + price - buyAccount;
    }

    if (isBought && currentIndex === prices.length - 1) {
      return profit + price - buyAccount;
    }

    return profit;
  }, 0);

  return profit;
};