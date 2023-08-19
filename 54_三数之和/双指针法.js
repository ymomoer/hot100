function threeSum(num) {
  // write code here
  const res = [];
  num.sort((a, b) => a - b);
  const n = num.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && num[i] === num[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = num[i] + num[left] + num[right];

      if (sum === 0) {
        res.push([num[i], num[left], num[right]]);

        while (left < right && num[left] === num[left + 1]) {
          left++;
        }
        while (left < right && num[right] === num[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
}
