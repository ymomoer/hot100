/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 求二叉树的右视图
 * @param xianxu int整型一维数组 先序遍历
 * @param zhongxu int整型一维数组 中序遍历
 * @return int整型一维数组
 */
function solve(xianxu, zhongxu) {
  // write code here
  let root = createTree(xianxu, zhongxu);
  let queue = [root];
  let result = [];
  while (queue.length) {
    let levelSize = queue.length;
    while (levelSize) {
      let curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      if (levelSize === 1) result.push(curr.val);
      levelSize--;
    }
  }
  return result;
}
function createTree(pre, vin) {
  if (!pre.length || !vin.length) return null;
  const root = new TreeNode(pre[0]);
  const leftLength = vin.indexOf(pre[0]);
  root.left = createTree(
    pre.slice(1, leftLength + 1),
    vin.slice(0, leftLength)
  );
  root.right = createTree(pre.slice(leftLength + 1), vin.slice(leftLength + 1));
  return root;
}
module.exports = {
  solve: solve,
};
