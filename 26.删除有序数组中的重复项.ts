/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let slow = 0, fast = 0;
    while (fast++ < nums.length - 1) {
        if (nums[fast] !== nums[slow]) {
            nums[++slow] = nums[fast]
        }
    }
    return slow + 1
};
// @lc code=end
