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
 * @return {boolean}
 */
var isValidBST = function(root, leftMax = Number.MIN_SAFE_INTEGER, rightMin = Number.MAX_SAFE_INTEGER) {
  if(!root) {
    return true;
  }

  if(leftMax >= root.val || root.val >= rightMin) {
    return false;
  }

  return isValidBST(root.left, leftMax, root.val) && isValidBST(root.right, root.val, rightMin);
};