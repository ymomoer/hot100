/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 旋转数组
 * @param n int整型 数组长度
 * @param m int整型 右移距离
 * @param a int整型一维数组 给定数组
 * @return int整型一维数组
 */
function solve(n, m, a) {
  // write code here
  m = m % n;
  reverse(a, 0, n - 1);
  reverse(a, 0, m - 1);
  reverse(a, m, n - 1);
  return a;
}
function reverse(a, start, end) {
  while (start < end) {
    let temp = a[start];
    a[start] = a[end];
    a[end] = temp;
    start++;
    end--;
  }
}
module.exports = {
  solve: solve,
};
