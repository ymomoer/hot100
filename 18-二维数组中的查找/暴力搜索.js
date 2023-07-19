/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param target int整型
 * @param array int整型二维数组
 * @return bool布尔型
 */
function Find(target, array) {
  // write code here
  if (array.length === null) return false;
  const rows = array.length;
  const cols = array[0].length;
  let row = 0;
  let col = cols - 1;
  while (row < rows && col >= 0) {
    if (array[row][col] === target) {
      return true;
    } else if (array[row][col] < target) {
      row++;
    } else {
      col--;
    }
  }
  return false;
}
module.exports = {
  Find: Find,
};
