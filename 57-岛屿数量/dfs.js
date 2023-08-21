/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 判断岛屿数量
 * @param grid char字符型二维数组
 * @return int整型
 */
function solve(grid) {
  // write code here
  if (grid === null || grid.length === 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
}
function dfs(grid, i, j) {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === "0"
  ) {
    return;
  }
  grid[i][j] = "0";

  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j);
  dfs(grid, i, j - 1);
  dfs(grid, i, j + 1);
}

module.exports = {
  solve: solve,
};
