/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param mat int整型二维数组
 * @param n int整型
 * @return int整型二维数组
 */
function rotateMatrix(mat, n) {
  // write code here
  let ans = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      ans[j][n - i - 1] = mat[i][j];
    }
  }
  return ans;
}
module.exports = {
  rotateMatrix: rotateMatrix,
};
