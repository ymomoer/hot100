/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
  // write code here
  let queue = [];
  let res = [];
  queue.push(pRoot);
  if (!pRoot) return res;
  //floors记录层数
  let floors = 1;
  while (queue.length != 0) {
    let levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (floors % 2 === 1) {
      res.push(level);
    } else {
      res.push(level.reverse());
    }
    floors++;
  }
  return res;
}
module.exports = {
  Print: Print,
};
