/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param height int整型一维数组
 * @return int整型
 */
function maxArea(height) {
  // write code here
  if (height.length < 2) return 0;
  let res = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let capacity = Math.min(height[left], height[right]) * (right - left);
    res = Math.max(res, capacity);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}
module.exports = {
  maxArea: maxArea,
};
