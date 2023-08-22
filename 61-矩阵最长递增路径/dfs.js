/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 递增路径的最大长度
 * @param matrix int整型二维数组 描述矩阵的每个数
 * @return int整型
 */
function solve(matrix) {
  // write code here
  let n = matrix.length,
    m = matrix[0].length;
  let res = 0;
  let tal = new Array(n).fill(-1).map(() => new Array(m).fill(-1));
  let dfs = function (i, j, num) {
    if (matrix[i][j] <= num) return 0;
    if (tal[i][j] > 0) return tal[i][j];
    let max = 0;
    if (i > 0) max = Math.max(max, dfs(i - 1, j, matrix[i][j]));
    if (i < n - 1) max = Math.max(max, dfs(i + 1, j, matrix[i][j]));
    if (j > 0) max = Math.max(max, dfs(i, j - 1, matrix[i][j]));
    if (j < m - 1) max = Math.max(max, dfs(i, j + 1, matrix[i][j]));
    tal[i][j] = max + 1;
    return max + 1;
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      res = Math.max(dfs(i, j, -1), res);
    }
  }
  return res;
}
module.exports = {
  solve: solve,
};
