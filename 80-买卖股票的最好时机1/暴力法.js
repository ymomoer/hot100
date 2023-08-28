/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param prices int整型一维数组
 * @return int整型
 */
function maxProfit(prices) {
  // write code here
  let res = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      res = Math.max(res, prices[j] - prices[i]);
    }
  }
  return res;
}
module.exports = {
  maxProfit: maxProfit,
};
