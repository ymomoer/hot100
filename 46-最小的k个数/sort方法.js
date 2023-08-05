function GetLeastNumbers_Solution(input, k) {
  // write code here
  if (k === 0 || input.length === 0) return [];
  input.sort((a, b) => {
    return a - b;
  });
  input = input.splice(0, k);
  return input;
}
module.exports = {
  GetLeastNumbers_Solution: GetLeastNumbers_Solution,
};
