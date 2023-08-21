/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串
 * @return string字符串一维数组
 */
function Permutation(str) {
  // write code here
  const arr = str.split("");
  arr.sort();
  const flag = new Array(arr.length).fill(0);
  const res = [];
  const backTracking = (path) => {
    if (path.length == arr.length) {
      res.push(path.join(""));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (flag[i]) continue;
      if (i > 0 && arr[i] == arr[i - 1] && !flag[i - 1]) continue;
      flag[i] = 1;
      path.push(arr[i]);
      backTracking(path);
      flag[i] = 0;
      path.pop();
    }
  };
  backTracking([]);
  return res;
}
module.exports = {
  Permutation: Permutation,
};
