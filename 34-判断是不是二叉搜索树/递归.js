/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param root TreeNode类
 * @return bool布尔型
 */
let pre = Number.MIN_SAFE_INTEGER;
function isValidBST(root) {
  // write code here
  if (root === null) return true;

  if (!isValidBST(root.left)) return false;
  if (root.val < pre) return false;

  pre = root.val;

  return isValidBST(root.right);
}
module.exports = {
  isValidBST: isValidBST,
};
