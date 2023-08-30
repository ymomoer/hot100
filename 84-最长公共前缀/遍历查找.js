/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param strs string字符串一维数组
 * @return string字符串
 */
function longestCommonPrefix(strs) {
  // write code here
  const n = strs.length;
  if (n === 0) return "";
  for (let i = 0; i < strs[0].length; i++) {
    const temp = strs[0][i];
    for (let j = 1; j < n; j++) {
      if (i === strs[j].length || strs[j][i] !== temp) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}
module.exports = {
  longestCommonPrefix: longestCommonPrefix,
};
