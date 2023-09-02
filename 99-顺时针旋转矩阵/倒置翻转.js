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
  let length = mat.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < Math.floor(length / 2); j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[i][length - j - 1];
      mat[i][length - j - 1] = temp;
    }
  }
  return mat;
}
module.exports = {
  rotateMatrix: rotateMatrix,
};
