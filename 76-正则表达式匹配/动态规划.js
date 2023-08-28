function match(str, pattern) {
  let n = str.length;
  let m = pattern.length;
  let dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(false));
  dp[0][0] = true;

  // 处理空字符串和模式中的 *
  for (let j = 1; j <= m; j++) {
    if (pattern[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // 动态规划
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (str[i - 1] === pattern[j - 1] || pattern[j - 1] === ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (pattern[j - 1] === "*") {
        if (str[i - 1] === pattern[j - 2] || pattern[j - 2] === ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }

  return dp[n][m];
}
module.exports = {
  match: match,
};
