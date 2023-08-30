/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串 待判断的字符串
 * @return bool布尔型
 */
function judge(str) {
  // write code here
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
module.exports = {
  judge: judge,
};
