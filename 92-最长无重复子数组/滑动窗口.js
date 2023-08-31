/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength(arr) {
  // write code here
  const map = new Map();
  let res = 0;
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    map.set(arr[right], (map.get(arr[right]) || 0) + 1);
    // 出现次数大于1，则窗口内有重复
    while (map.get(arr[right]) > 1) {
      map.set(arr[left], map.get(arr[left]) - 1);
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
}
module.exports = {
  maxLength: maxLength,
};
