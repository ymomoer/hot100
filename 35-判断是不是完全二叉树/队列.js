function isCompleteTree(root) {
  if (!root) return true;

  const queue = [];
  queue.push(root);

  let flag = false;
  while (queue.length) {
    const t = queue.shift();
    if (t === null) {
      flag = true;
      continue;
    }
    if (flag === true) {
      return false;
    }
    queue.push(t.left);
    queue.push(t.right);
  }
  return true;
}
