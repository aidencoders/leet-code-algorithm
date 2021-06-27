/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  const list = [];
  const queue = [];
  const level = [];

  queue.push(root);

  while (queue.length !== 0) {
    const currentLevel = [];
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const currentNode = queue.shift();

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }

      currentLevel.push(currentNode.val);
    }

    level.push(currentLevel);
  }

  return level;
};