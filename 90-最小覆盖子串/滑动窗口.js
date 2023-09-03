/**
 *
 * @param S string字符串
 * @param T string字符串
 * @return string字符串
 */
function minWindow(S, T) {
  // write code here
  let Tmap = new Map();
  let Rmap = new Map(); //用来和Tmap对比是否满足条件
  let TLen = T.length;
  let SLen = S.length;
  let size;
  let L = 0;
  let R = 0;
  let res = "";
  for (var i = 0; i < TLen; i++) {
    if (Tmap.has(T[i])) {
      Tmap.set(T[i], Tmap.get(T[i]) + 1);
    } else {
      Tmap.set(T[i], 1);
      Rmap.set(T[i], 0);
    }
  }
  size = Tmap.size;
  while (R < SLen) {
    if (Rmap.has(S[R])) {
      Rmap.set(S[R], Rmap.get(S[R]) + 1);
      if (Rmap.get(S[R]) === Tmap.get(S[R])) {
        size--;
      }
    }
    while (size === 0) {
      let newStr = S.slice(L, R + 1);
      if (!res) {
        res = newStr;
      } else {
        if (res.length > newStr.length) res = newStr;
      }

      if (Rmap.has(S[L])) {
        Rmap.set(S[L], Rmap.get(S[L]) - 1);
        if (Rmap.get(S[L]) < Tmap.get(S[L])) {
          size++;
        }
      }
      L++;
    }

    R++;
  }
  return res;
}
module.exports = {
  minWindow: minWindow,
};
