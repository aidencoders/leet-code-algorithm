/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
  nums.forEach((num) => {
    if (nums.indexOf(num) === nums.lastIndexOf(num)) {
      result = num;
    }
  });

  return result;
};