/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param num int整型一维数组
 * @return int整型二维数组
 */
let res = [];
let row = [];
let len = 0;
function permuteUnique(num) {
  // write code here
  if (row.length === 0) {
    len = num.length;
    num.sort((a, b) => a - b);
  }
  if (row.length === len) {
    res.push(row.slice());
    return;
  }
  let pass = [];
  for (let i = 0; i < num.length; i++) {
    if (pass.includes(num[i])) continue;
    row.push(num[i]);
    pass.push(num[i]);
    num.splice(i, 1);
    permuteUnique(num);
    num.splice(i, 0, row.pop());
  }
  return res;
}
module.exports = {
  permuteUnique: permuteUnique,
};
