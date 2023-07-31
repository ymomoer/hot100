function hasPathSum(root, sum) {
  if (!root) return false;
  if (root && root.val === sum && !root.left && !root.right) return true;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
}
