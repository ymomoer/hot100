function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
let pre = null;
let cur = null;
function Convert(pRootOfTree) {
  // write code here
  if (pRootOfTree === null) return null;

  Convert(pRootOfTree.left);
  if (pre === null) {
    pre = pRootOfTree;
    cur = pRootOfTree;
  } else {
    pre.right = pRootOfTree;
    pRootOfTree.left = pre;
    pre = pRootOfTree;
  }
  Convert(pRootOfTree.right);
  return cur;
}
module.exports = {
  Convert: Convert,
};
