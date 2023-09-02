/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix int整型二维数组
 * @return int整型一维数组
 */
function spiralOrder(matrix) {
  // write code here
  let result = [];
  if (matrix.length === 0) {
    return result;
  }
  let left = 0;
  let right = matrix[0].length - 1;
  let up = 0;
  let down = matrix.length - 1;
  while (left <= right && up <= down) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[up][i]);
    }
    up++;
    for (let i = up; i <= down; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    if (up <= down) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[down][i]);
      }
      down--;
    }
    if (left <= right) {
      for (let i = down; i >= up; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}
module.exports = {
  spiralOrder: spiralOrder,
};
