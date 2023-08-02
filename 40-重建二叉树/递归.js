function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function reConstructBinaryTree(pre, vin) {
  // write code here
  if (!pre.length || !vin.length) return null;

  const root = new TreeNode(pre[0]);
  const leftLength = vin.indexOf(pre[0]);
  root.left = reConstructBinaryTree(
    pre.slice(1, leftLength + 1),
    vin.slice(0, leftLength)
  );
  root.right = reConstructBinaryTree(
    pre.slice(leftLength + 1),
    vin.slice(leftLength + 1)
  );
  return root;
}
module.exports = {
  reConstructBinaryTree: reConstructBinaryTree,
};
