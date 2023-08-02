function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}
function Serialize(pRoot) {
  // write code here
  const result = [];
  traverse(pRoot, result);
  return result.join(",");
}
function traverse(root, result) {
  if (!root) {
    result.push("#");
    return;
  }
  result.push(root.val);
  traverse(root.left, result);
  traverse(root.right, result);
}

function Deserialize(data) {
  // write code here
  const queue = data.split(",");
  return buildTree(queue);
}
function buildTree(queue) {
  const val = queue.shift();
  if (val === "#") {
    return null;
  }
  const node = new TreeNode(parseInt(val));
  node.left = buildTree(queue);
  node.right = buildTree(queue);
  return node;
}
module.exports = {
  Serialize: Serialize,
  Deserialize: Deserialize,
};
