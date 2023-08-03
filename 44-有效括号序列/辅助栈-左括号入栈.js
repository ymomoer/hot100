/**
 *
 * @param s string字符串
 * @return bool布尔型
 * （{[(    )]}）
 */
function isValid(s) {
  // write code here
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let temp = s.charAt(i);
    if (temp === "(" || temp === "[" || temp === "{") {
      arr.push(temp);
    } else {
      if (temp === ")") {
        if (arr.length === 0) return false;
        if (arr[arr.length - 1] === "(") {
          arr.pop();
        } else {
          return false;
        }
      } else if (temp === "]") {
        if (arr.length === 0) return false;
        if (arr[arr.length - 1] === "[") {
          arr.pop();
        } else {
          return false;
        }
      }
      if (temp === "}") {
        if (arr.length === 0) return false;
        if (arr[arr.length - 1] === "{") {
          arr.pop();
        } else {
          return false;
        }
      }
    }
  }
  if (arr.length === 0) return true;
}
module.exports = {
  isValid: isValid,
};
