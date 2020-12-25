/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let m = 0; m < nums.length - 1; m++) {
    for (let n = m + 1; n < nums.length; n++) {
      if (nums[m] + nums[n] === target) {
        return [m, n];
      }
    }
  }
};
// @lc code=end
