/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param number int整型
 * @return int整型
 */
function jumpFloor(number) {
  // write code here
  if (number <= 1) return 1;
  return jumpFloor(number - 1) + jumpFloor(number - 2);
}
module.exports = {
  jumpFloor: jumpFloor,
};
