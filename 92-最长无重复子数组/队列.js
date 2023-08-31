/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param arr int整型一维数组 the array
 * @return int整型
 */
function maxLength(arr) {
  // write code here
  const queue = [];
  let res = 0;

  for (const c of arr) {
    while (queue.includes(c)) {
      queue.shift();
    }
    queue.push(c);
    res = Math.max(res, queue.length);
  }
  return res;
}
module.exports = {
  maxLength: maxLength,
};
