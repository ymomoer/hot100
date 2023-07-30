/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return int整型
 */
function compare(version1, version2) {
  // write code here
  const arr1 = version1.split(".");
  const arr2 = version2.split(".");

  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    let tmp1 = i < arr1.length ? parseInt(arr1[i]) : 0;
    let tmp2 = i < arr2.length ? parseInt(arr2[i]) : 0;
    if (tmp1 > tmp2) return 1;
    if (tmp1 < tmp2) return -1;
  }
  return 0;
}
module.exports = {
  compare: compare,
};
