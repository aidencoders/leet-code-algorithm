/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = new Map();

  for (const string of strs) {
    const sorted = string.split("").sort().join("");

    if (hash.has(sorted)) hash.set(sorted, [...hash.get(sorted), string]);
    else hash.set(sorted, [string]);
  }

  return Array.from(hash.values());
};