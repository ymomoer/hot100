/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 计算两个数之和
 * @param s string字符串 表示第一个整数
 * @param t string字符串 表示第二个整数
 * @return string字符串
 */
function solve(s, t) {
  // write code here
  let res = [];
  let i = s.length - 1;
  let j = t.length - 1;

  let carry = 0;
  while (i >= 0 || j >= 0) {
    const n1 = parseInt(s[i]) || 0;
    const n2 = parseInt(t[j]) || 0;
    const temp = n1 + n2 + carry;
    carry = Math.floor(temp / 10);
    res = (temp % 10) + res;
    i--;
    j--;
  }
  if (carry) {
    res = "1" + res;
  }
  return res;
}
module.exports = {
  solve: solve,
};
