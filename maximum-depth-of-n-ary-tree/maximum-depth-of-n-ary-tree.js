/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    }
    
    let result = 1;
    
    function helper(node, depth = 1) {
        if(!node.children.length) {
            result = Math.max(result, depth);
            return;
        }
        
        for(let i = 0; i < node.children.length; ++i) {
            helper(node.children[i], depth + 1);    
        }
    }
    
    helper(root);
    return result;
};