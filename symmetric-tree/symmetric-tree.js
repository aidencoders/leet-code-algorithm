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
var isSymmetric = function(root) {
    const checkSymmentric = (left, right) => {
    if (!left || !right) return left === right;
    if (left.val !== right.val) return false;

    return checkSymmentric(left.left, right.right) && checkSymmentric(left.right, right.left);
  };

  return checkSymmentric(root.left, root.right);
};