/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return string字符串一维数组
 */
function restoreIpAddresses(s) {
  // write code here
  const res = [];
  const n = s.length;
  for (let i = 1; i < 4 && i < n - 2; i++) {
    for (let j = i + 1; j < i + 4 && j < n - 1; j++) {
      for (let k = j + 1; k < j + 4 && k < n; k++) {
        if (n - k >= 4) continue;
        const a = s.substring(0, i);
        const b = s.substring(i, j);
        const c = s.substring(j, k);
        const d = s.substring(k);

        if (
          parseInt(a) > 255 ||
          parseInt(b) > 255 ||
          parseInt(c) > 255 ||
          parseInt(d) > 255
        ) {
          continue;
        }
        if (
          (a.length !== 1 && a.charAt(0) === "0") ||
          (b.length !== 1 && b.charAt(0) === "0") ||
          (c.length !== 1 && c.charAt(0) === "0") ||
          (d.length !== 1 && d.charAt(0) === "0")
        ) {
          continue;
        }
        const temp = `${a}.${b}.${c}.${d}`;
        res.push(temp);
      }
    }
  }
  return res;
}
module.exports = {
  restoreIpAddresses: restoreIpAddresses,
};
