/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * pick candy
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function candy(arr) {
  // write code here
  let n = arr.length;
  if (n <= 1) return n;

  let nums = new Array(n).fill(1);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      nums[i] = nums[i - 1] + 1;
    }
  }
  let res = nums[arr.length - 1];

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1] && nums[i] <= nums[i + 1]) {
      nums[i] = nums[i + 1] + 1;
    }
    res += nums[i];
  }
  return res;
}
module.exports = {
  candy: candy,
};
