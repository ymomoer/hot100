/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * longest common substring
 * @param str1 string字符串 the string
 * @param str2 string字符串 the string
 * @return string字符串
 */
function LCS(str1, str2) {
  // write code here
  let maxLength = 0; // 记录最长公共子串的长度
  let maxLengthIndex = 0; // 记录最长公共子串最后一个元素在字符串str1中的位置
  const dp = Array.from(Array(str1.length + 1), () =>
    Array(str2.length + 1).fill(0)
  );

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str1.length; j++) {
      if (str1.charAt(i) === str2.charAt(j)) {
        dp[i + 1][j + 1] = dp[i][j] + 1;
        if (dp[i + 1][j + 1] > maxLength) {
          maxLength = dp[i + 1][j + 1];
          maxLengthIndex = i;
        }
      } else {
        dp[i + 1][j + 1] = 0;
      }
    }
  }

  return str1.substring(maxLengthIndex - maxLength + 1, maxLengthIndex + 1);
}
module.exports = {
  LCS: LCS,
};
