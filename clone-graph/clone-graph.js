/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const visited = {};

  const travel = function(node) {
    if (!node) return node;
    if (visited[node.val] != null) return visited[node.val];

    const newNode = new Node(node.val);
    visited[node.val] = newNode;

    for (let neighbor of node.neighbors) {
      newNode.neighbors.push(travel(neighbor));
    }

    return newNode;
  }

  return travel(node);
};