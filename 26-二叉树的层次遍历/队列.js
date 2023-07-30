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
 * @return int整型二维数组
 */
function levelOrder(root) {
  // write code here
  //如果根节点为空，则直接返回空数组
  if (root == null) {
    return [];
  }
  //创建队列，并将根节点加入队列当中
  const queue = [root];
  const res = [];
  //循环遍历队列中的节点
  while (queue.length) {
    //记录当前层的节点数
    const levelSize = queue.length;
    const level = [];
    //遍历当前层的所有节点
    for (let i = 0; i < levelSize; i++) {
      //取出队列中的节点，并将其值存入level数组中
      const node = queue.shift();
      level.push(node.val);
      //如果当前节点存在左子树，则将其左节点加入队列
      if (node.left) {
        queue.push(node.left);
      }
      //如果当前节点存在右子树，则将其右节点加入队列
      if (node.right) {
        queue.push(node.right);
      }
    }
    //将当前层的节点值存入数组res中
    res.push(level);
  }
  return res;
}
module.exports = {
  levelOrder: levelOrder,
};
