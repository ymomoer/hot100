/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function IsBalanced_Solution(pRoot) {
  // write code here
  if (!pRoot) return true;
  let left = deep(pRoot.left);
  let right = deep(pRoot.right);
  if (left - right > 1 || left - right < -1) {
    return false;
  }
  return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);
}
function deep(pRoot) {
  if (!pRoot) return 0;
  let left = deep(pRoot.left);
  let right = deep(pRoot.right);
  return left > right ? left + 1 : right + 1;
}

module.exports = {
  IsBalanced_Solution: IsBalanced_Solution,
};
