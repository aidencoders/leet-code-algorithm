/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const stringList = [...strs];

  const result = stringList.reduce((previousString, nextString) => {
    let i = 0;

    while (previousString[i] && nextString[i] && previousString[i] === nextString[i]) i++;

    return previousString.slice(0, i);
  });

  return result;
};