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
 * @param p int整型
 * @param q int整型
 * @return int整型
 */
function lowestCommonAncestor(root, p, q) {
  // write code here
  path_p = getPath(root, p);
  path_q = getPath(root, q);
  let res = 0;
  for (let i = 0; i < path_p.length && i < path_q.length; i++) {
    const x = path_p[i];
    const y = path_q[i];
    if (x === y) res = path_p[i];
    else break;
  }
  return res;
}

function getPath(root, target) {
  const path = [];
  let node = root;
  while (node.val !== target) {
    path.push(node.val);
    if (target < node.val) node = node.left;
    else node = node.right;
  }
  path.push(node.val);
  return path;
}
module.exports = {
  lowestCommonAncestor: lowestCommonAncestor,
};
