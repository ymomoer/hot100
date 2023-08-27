/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A string字符串
 * @return int整型
 */
function getLongestPalindrome(A) {
  // write code here
  let n = A.length;
  if (n < 2) {
    return n;
  }
  let res = 0;
  // 每个字符都可以尝试作为中心点
  for (let i = 0; i < n; i++) {
    // 两种情况：可能是类似 aba 的字符串，也可能是类似 abba 的情况
    // 只需要分别计算出以一个和两个字符作为中心点的子串，取出较大的长度即可
    let len = Math.max(helper(A, i, i), helper(A, i, i + 1));
    // 更新最大长度
    res = Math.max(res, len);
  }
  return res;
}

function helper(A, left, right) {
  // 从 left 到 right 开始向两边扩散、比较
  while (left >= 0 && right < A.length) {
    // 如果相等则继续扩散比较
    if (A.charAt(left) === A.charAt(right)) {
      left--;
      right++;
      continue;
    }
    // 如果不相等则剪枝，不用再继续扩散比较
    break;
  }
  // "+1" 是因为通过下标计算子串长度
  // "-2" 是因为上边的 while 循环是当索引为 left 和 right 不相等才退出循环的
  // 因此此时的 left 和 right 是不满足的，需要舍弃
  return right - left + 1 - 2;
}
module.exports = {
  getLongestPalindrome: getLongestPalindrome,
};
