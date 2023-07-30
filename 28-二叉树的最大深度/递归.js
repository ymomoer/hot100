/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
 *
 * @param root TreeNode类
 * @return int整型
 */
function maxDepth(root) {
  // write code here
  if (root === null) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
}
module.exports = {
  maxDepth: maxDepth,
};
