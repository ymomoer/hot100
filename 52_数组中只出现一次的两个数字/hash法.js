function FindNumsAppearOnce(nums) {
  // write code here
  let res = [];
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  return Array.from(set).sort();
}
