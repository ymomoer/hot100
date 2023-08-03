function maxInWindows(num, size) {
  if (num.length === 0 || size < 1 || num.length < size) {
    return [];
  }
  const ret = [];
  for (let i = 0; i + size - 1 < num.length; i++) {
    let maxVal = num[i];
    for (let j = i + 1; j <= i + size - 1; j++) {
      maxVal = Math.max(maxVal, num[j]);
    }
    ret.push(maxVal);
  }
  return ret;
}
module.exports = {
  maxInWindows: maxInWindows,
};
