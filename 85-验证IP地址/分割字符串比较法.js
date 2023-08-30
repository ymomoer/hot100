/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 验证IP地址
 * @param IP string字符串 一个IP地址字符串
 * @return string字符串
 */
function solve(IP) {
  // write code here
  if (isIPv4(IP)) {
    return "IPv4";
  } else if (isIPv6(IP)) {
    return "IPv6";
  }
  return "Neither";
}
function isIPv4(IP) {
  if (IP.indexOf(".") === -1) {
    return false;
  }
  const s = IP.split(".");
  if (s.length !== 4) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (
      s[i].length === 0 ||
      s[i].length > 3 ||
      (s[i].charAt(0) === "0" && s[i].length !== 1)
    ) {
      return false;
    }
    let num = 0;
    for (let j = 0; j < s[i].length; j++) {
      let c = s[i].charAt(j);
      if (c < "0" || c > "9") {
        return false;
      }
      num = num * 10 + parseInt(c, 10);
    }
    if (num < 0 || num > 255) {
      return false;
    }
  }
  return true;
}
function isIPv6(IP) {
  if (IP.indexOf(":") === -1) {
    return false;
  }
  const s = IP.split(":");
  if (s.length !== 8) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i].length === 0 || s[i].length > 4 || !/^[0-9a-fA-F]+$/.test(s[i])) {
      return false;
    }
  }
  return true;
}
module.exports = {
  solve: solve,
};
