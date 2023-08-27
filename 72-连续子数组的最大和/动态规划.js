/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型
 */
function FindGreatestSumOfSubArray(array) {
  // write code here
  let dp = new Array(array.length);
  let max = array[0];
  dp[0] = array[0];
  for (let i = 1; i < array.length; i++) {
    dp[i] = Math.max(dp[i - 1] + array[i], array[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
}
module.exports = {
  FindGreatestSumOfSubArray: FindGreatestSumOfSubArray,
};
