function permute(num) {
  // write code here
  const result = [];
  backtrack(num, [], result);
  return result;
}
function backtrack(num, path, result) {
  if (path.length === num.length) {
    result.push([...path]);
    return;
  }
  for (let i of num) {
    if (!path.includes(i)) {
      path.push(i);
      backtrack(num, path, result);
      path.pop();
    }
  }
}
