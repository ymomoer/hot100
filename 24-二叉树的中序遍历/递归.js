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
 * @return int整型一维数组
 */
function inorderTraversal(root) {
  // write code here
  const res = [];
  function midSearch(root) {
    if (root === null) return;
    midSearch(root.left);
    res.push(root.val);
    midSearch(root.right);
  }
  midSearch(root);
  return res;
}

module.exports = {
  inorderTraversal: inorderTraversal,
};
