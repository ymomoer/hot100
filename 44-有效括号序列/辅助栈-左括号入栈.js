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

// 简写
/**
 *
 * @param s string字符串
 * @return bool布尔型
 * （{[(    )]}）
 */

// write code here
function isValid(s) {
  let stack = []; // 创建一个空数组 stack，用于存储左括号
  for (let i = 0; i < s.length; i++) {
    let temp = s.charAt(i);
    if (temp === "(" || temp === "[" || temp === "{") {
      stack.push(temp); // 将左括号压入 stack 数组中
    } else {
      if (stack.length === 0) {
        return false;
      }
      let left = stack.pop(); // 从栈顶取出一个左括号进行匹配
      if (
        (temp === ")" && left !== "(") ||
        (temp === "]" && left !== "[") ||
        (temp === "}" && left !== "{")
      ) {
        return false; // 如果匹配失败，则括号序列不合法，返回 false
      }
    }
  }
  return stack.length === 0; // 如果栈为空，则括号序列合法，返回 true，否则不合法，返回 false
}

module.exports = {
  isValid: isValid,
};
