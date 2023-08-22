/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param n int整型
 * @return string字符串一维数组
 */
function generateParenthesis(n) {
  // write code here
  const res = [];
  recursion(0, 0, "", res, n);
  return res;
}
function recursion(left, right, temp, res, n) {
  if (left === n && right === n) {
    res.push(temp);
    return;
  }
  if (left < n) {
    recursion(left + 1, right, temp + "(", res, n);
  }
  if (right < n && left > right) {
    recursion(left, right + 1, temp + ")", res, n);
  }
}
module.exports = {
  generateParenthesis: generateParenthesis,
};
