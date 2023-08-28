/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return int整型
 */
function longestValidParentheses(s) {
  // write code here
  let stack = [];
  let ans = 0;
  stack.push(-1);

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        ans = Math.max(ans, i - stack[stack.length - 1]);
      }
    }
  }
  return ans;
}
module.exports = {
  longestValidParentheses: longestValidParentheses,
};
