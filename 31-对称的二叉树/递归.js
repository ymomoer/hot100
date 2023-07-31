/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function isSymmetrical(pRoot) {
  if (pRoot === null) return true;
  return recursion(pRoot, pRoot);
}

function recursion(lRoot, rRoot) {
  if (lRoot === null && rRoot === null) return true;
  if (lRoot === null || rRoot === null || lRoot.val !== rRoot.val) return false;
  return (
    recursion(lRoot.left, rRoot.right) && recursion(lRoot.right, rRoot.left)
  );
}
module.exports = {
  isSymmetrical: isSymmetrical,
};
