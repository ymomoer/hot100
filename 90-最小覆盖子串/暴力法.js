/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param S string字符串
 * @param T string字符串
 * @return string字符串
 */
function minWindow(S, T) {
  // write code here
  if (S.length < T.length) return "";
  let ret = S;
  let flag = false;
  for (let i = 0; i < S.length; i++) {
    for (let j = T.length; j <= S.length; j++) {
      if (check(T, S.substring(i, i + j))) {
        if (ret.length >= j) {
          flag = true;
          ret = S.substring(i, i + j);
        }
      }
    }
  }
  if (flag) {
    return ret;
  } else {
    return "";
  }
}

function check(T, S) {
  const map = new Map();
  for (let i = 0; i < S.length; i++) {
    if (!map.has(S[i])) {
      map.set(S[i], 0);
    }
    map.set(S[i], map.get(S[i]) + 1);
  }
  for (let i = 0; i < T.length; i++) {
    if (!map.has(T[i]) || map.get(T[i]) <= 0) {
      return false;
    }
    map.set(T[i], map.get(T[i]) - 1);
  }
  return true;
}
module.exports = {
  minWindow: minWindow,
};
//运行超时
