/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param prices int整型一维数组
 * @return int整型
 */
function maxProfit(prices) {
  // write code here
  const len = prices.length;
  if (len < 2) {
    return 0;
  }
  const dp = new Array(len).fill(0).map(() => new Array(2).fill(0));

  dp[0][0] = 0;
  dp[0][1] = -prices[0];
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
  }
  return dp[len - 1][0];
}
module.exports = {
  maxProfit: maxProfit,
};
