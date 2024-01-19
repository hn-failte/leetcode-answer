/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

function twoSum(nums: number[], target: number): number[] {
  const cache = new Array()
  let list: number[] = []
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]] !== void 0) {
      list = [i, cache[nums[i]]]
      break
    } else {
      cache[target - nums[i]] = i
    }
  }
  return list
};
// @lc code=end
