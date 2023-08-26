/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix int整型二维数组 the matrix
 * @return int整型
 */
function minPathSum(matrix) {
  // write code here
  let m = matrix.length;
  let n = matrix[0].length;
  let dp = new Array();
  dp = matrix;
  dp[0][0] = matrix[0][0];
  for (let i = 1; i < n; i++) {
    dp[0][i] = dp[0][i - 1] + matrix[0][i];
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + matrix[i][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j];
    }
  }
  return dp[m - 1][n - 1];
}
module.exports = {
  minPathSum: minPathSum,
};
