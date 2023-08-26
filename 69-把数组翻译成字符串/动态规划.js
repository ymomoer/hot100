/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 解码
 * @param nums string字符串 数字串
 * @return int整型
 */
function solve(nums) {
  // write code here
  if (nums === "0") {
    return 0;
  }
  if (nums === "10" || nums === "20") {
    return 1;
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums.charAt(i) === "0") {
      if (nums.charAt(i - 1) !== "1" && nums.charAt(i - 1) !== "2") {
        return 0;
      }
    }
  }

  const dp = new Array(nums.length + 1).fill(1);
  for (let i = 2; i <= nums.length; i++) {
    if (
      (nums.charAt(i - 2) === "1" && nums.charAt(i - 1) !== "0") ||
      (nums.charAt(i - 2) === "2" &&
        nums.charAt(i - 1) > "0" &&
        nums.charAt(i - 1) < "7")
    ) {
      dp[i] = dp[i - 1] + dp[i - 2];
    } else {
      dp[i] = dp[i - 1];
    }
  }
  return dp[nums.length];
}
module.exports = {
  solve: solve,
};
