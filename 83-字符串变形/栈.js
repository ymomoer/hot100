/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @param n int整型
 * @return string字符串
 */
function trans(s, n) {
  // write code here
  if (n === 0) return s;
  let res = "";
  for (let i = 0; i < n; i++) {
    if (s[i] >= "A" && s[i] <= "Z") {
      res += s[i].toLowerCase();
    } else if (s[i] >= "a" && s[i] <= "z") {
      res += s[i].toUpperCase();
    } else {
      res += s[i];
    }
  }
  const temp = [];
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j < n && res[j] !== " ") {
      j++;
    }
    temp.push(res.substring(i, j));
    i = j;
  }
  res = "";
  if (s[n - 1] === " ") {
    // 结尾是空格
    res = " ";
  }
  while (temp.length > 0) {
    res += temp.pop();
    if (temp.length > 0) {
      res += " ";
    }
  }
  return res;
}
module.exports = {
  trans: trans,
};
