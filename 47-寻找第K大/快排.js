/**
 *
 * @param a int整型一维数组
 * @param n int整型
 * @param K int整型
 * @return int整型
 */
function findKth(a, n, K) {
  // write code here
  return quicksort(a, 0, n - 1, K);
}
function quicksort(a, l, r, K) {
  const partition = () => {
    let pivot = a[l];
    let i = l,
      j = r;
    while (i < j) {
      while (i < j && a[j] <= pivot) j--;
      a[i] = a[j];
      while (i < j && a[i] >= pivot) i++;
      a[j] = a[i];
    }
    a[i] = pivot;
    return i;
  };

  if (l <= r) {
    let i = partition();
    if (i == K - 1) return a[i];
    else if (i < K - 1) return quicksort(a, i + 1, r, K);
    else return quicksort(a, l, i - 1, K);
  }
}

module.exports = {
  findKth: findKth,
};
