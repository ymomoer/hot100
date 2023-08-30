/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param intervals Interval类一维数组
 * @return Interval类一维数组
 */
function merge(intervals) {
  // write code here
  if (intervals.length < 2) return intervals;
  intervals.sort((a, b) => a.start - b.start);

  const merged = [intervals[0]];
  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];
    const pre = merged[merged.length - 1];
    if (current.start <= pre.end) {
      pre.end = Math.max(pre.end, current.end);
    } else {
      merged.push(current);
    }
  }
  return merged;
}
module.exports = {
  merge: merge,
};
