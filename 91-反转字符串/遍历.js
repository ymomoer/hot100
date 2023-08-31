/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 反转字符串
 * @param str string字符串
 * @return string字符串
 */
function solve(str) {
  // write code here
  let ans = "";
  for (let i = str.length - 1; i >= 0; i--) {
    ans = ans + str[i];
  }
  return ans;
}
module.exports = {
  solve: solve,
};
