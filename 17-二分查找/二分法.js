/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @param target int整型
 * @return int整型
 */
function search(nums, target) {
  // write code here
  let left = 0;
  let right = nums.length - 1;
  let mid = parseInt((left + right) / 2);
  while (left <= right) {
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
module.exports = {
  search: search,
};
