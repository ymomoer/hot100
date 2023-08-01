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
 * @param o1 int整型
 * @param o2 int整型
 * @return int整型
 */
function lowestCommonAncestor(root, o1, o2) {
  // write code here
  if (!root) return -1;
  if (o1 === root.val || o2 === root.val) return root.val;
  let left = lowestCommonAncestor(root.left, o1, o2);
  let right = lowestCommonAncestor(root.right, o1, o2);
  if (left === -1) return right;
  if (right === -1) return left;
  return root.val;
}
module.exports = {
  lowestCommonAncestor: lowestCommonAncestor,
};
