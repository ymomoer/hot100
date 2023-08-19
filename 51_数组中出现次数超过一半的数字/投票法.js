/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型
 */
function MoreThanHalfNum_Solution(numbers) {
  // write code here
  if (numbers.length === 0) {
    return -1;
  }
  if (numbers.length === 1) {
    return numbers[0];
  }
  let ret = numbers[0];
  let times = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (times === 0) {
      ret = numbers[i];
      times = 1;
    } else if (numbers[i] === ret) {
      times++;
    } else {
      times--;
    }
  }

  return ret;
}
module.exports = {
  MoreThanHalfNum_Solution: MoreThanHalfNum_Solution,
};
