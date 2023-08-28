/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 */
function longestValidParentheses(s) {
  // write code here
  let res = 0;
  if (s.length === 0 || s === null) return res;
  const dp = new Array(s.length).fill(0);
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === ")") {
      if (s.charAt(i - 1) === "(") {
        dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2;
      } else if (i - dp[i - 1] > 0 && s.charAt(i - dp[i - 1] - 1) === "(") {
        dp[i] = (i - dp[i - 1] > 1 ? dp[i - dp[i - 1] - 2] : 0) + dp[i - 1] + 2;
      }
    }
    res = Math.max(res, dp[i]);
  }
  return res;
}
module.exports = {
  longestValidParentheses: longestValidParentheses,
};
