function FindNumsAppearOnce(nums) {
  // write code here
  let xorResult = 0;
  for (let i of nums) {
    xorResult ^= i;
  }

  let lowestBit = xorResult & -xorResult;

  let group1 = 0;
  let group2 = 0;
  for (let i of nums) {
    if (i & lowestBit) {
      group1 ^= i;
    } else {
      group2 ^= i;
    }
  }
  if (group1 < group2) return [group1, group2];
  return [group2, group1];
}
