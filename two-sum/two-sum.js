const twoSum = function(numberList, target) {
  for (let i = 0; i < numberList.length; i++) {
    for (let j = 1; j < numberList.length; j++) {
      if (i !== j && numberList[i] + numberList[j] === target) {
        return [i, j];
      }
    }
  }
};