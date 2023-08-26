function uniquePaths(m, n) {
  // write code here
  const dp = Array.from(Array(m), () => Array(n).fill(0)); //创建二维数组dp,并初始化为全0

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}
