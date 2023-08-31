/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * max water
 * @param arr int整型一维数组 the array
 * @return long长整型
 */
function maxWater(arr) {
  // write code here
  if (arr.length === 0) return 0;
  let res = 0;
  let left = 0;
  let right = arr.length - 1;
  let maxL = 0;
  let maxR = 0;
  while (left < right) {
    maxL = Math.max(maxL, arr[left]);
    maxR = Math.max(maxR, arr[right]);
    if (maxR > maxL) {
      res += maxL - arr[left++];
    } else {
      res += maxR - arr[right--];
    }
  }
  return res;
}
module.exports = {
  maxWater: maxWater,
};
