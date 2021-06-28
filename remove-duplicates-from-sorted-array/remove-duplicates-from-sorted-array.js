/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;

  nums.forEach((item) => {
    if (item !== nums[i]) {
      nums[++i] = item;
    }
  })

  return i + 1;
};