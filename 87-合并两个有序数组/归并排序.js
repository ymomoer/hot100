/**
 *
 * @param A int整型一维数组
 * @param B int整型一维数组
 * @return void
 */
function merge(A, m, B, n) {
  // write code here
  let i = m - 1;
  let j = n - 1;
  let p = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (A[i] >= B[j]) {
      A[p] = A[i];
      i--;
    } else {
      A[p] = B[j];
      j--;
    }
    p--;
  }
  while (j >= 0) {
    A[p] = B[j];
    j--;
    p--;
  }
}
module.exports = {
  merge: merge,
};
