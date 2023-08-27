/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 最少货币数
 * @param arr int整型一维数组 the array
 * @param aim int整型 the target
 * @return int整型
 */
function minMoney(arr, aim) {
  // write code here
  // 小于1的都返回0
  if (aim < 1) {
    return 0;
  }
  // dp[i]表示凑齐i元最少需要多少货币数
  const dp = new Array(aim + 1).fill(aim + 1);
  dp[0] = 0;

  // 遍历1-aim元
  for (let i = 1; i <= aim; i++) {
    // 每种面值的货币都要枚举
    for (let j = 0; j < arr.length; j++) {
      // 如果面值不超过要凑的钱才能用
      if (arr[j] <= i) {
        // 维护最小值
        dp[i] = Math.min(dp[i], dp[i - arr[j]] + 1);
      }
    }
  }
  return dp[aim] > aim ? -1 : dp[aim];
}
module.exports = {
  minMoney: minMoney,
};
