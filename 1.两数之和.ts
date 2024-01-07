/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// function twoSum(nums: number[], target: number): number[] {
//     for (let m = 0; m < nums.length - 1; m++) {
//         for (let n = m + 1; n < nums.length; n++) {
//           if (nums[m] + nums[n] === target) {
//             return [m, n];
//           }
//         }
//     }
// };
function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for (let m = 0; m < nums.length; m++) {
      const item = nums[m];
      const current = map.get(target - item);
      if (current > -1) return [current, m];
      map.set(item, m);
    }
};
// @lc code=end
