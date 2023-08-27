/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str1 string字符串
 * @param str2 string字符串
 * @return int整型
 */
function editDistance(str1, str2) {
  // write code here
  const n1 = str1.length;
  const n2 = str2.length;

  const dp = Array(n1 + 1)
    .fill(0)
    .map(() => Array(n2 + 1).fill(0));

  for (let i = 1; i <= n1; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }

  for (let i = 1; i <= n2; i++) {
    dp[0][i] = dp[0][i - 1] + 1;
  }

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[n1][n2];
}
module.exports = {
  editDistance: editDistance,
};
