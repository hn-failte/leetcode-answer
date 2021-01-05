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
// var twoSum = function (nums, target) {
//   for (let m = 0; m < nums.length - 1; m++) {
//     for (let n = m + 1; n < nums.length; n++) {
//       if (nums[m] + nums[n] === target) {
//         return [m, n];
//       }
//     }
//   }
// };
var twoSum = function (nums, target) {
  let map = new Map();
  for (let m = 0; m < nums.length; m++) {
    const item = nums[m];
    const current = map.get(target - item);
    if (current > -1) return [current, m];
    map.set(item, m);
  }
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = twoSum;
// @after-stub-for-debug-end
