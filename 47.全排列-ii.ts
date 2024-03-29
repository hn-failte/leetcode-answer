/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
    const list: number[][] = []
    const vis = new Array(nums.length).fill(false)
    const backtrack = (perm: number[]) => {
        if (perm.length === nums.length) return list.push(perm.slice())
        for (let i = 0; i < nums.length; i++) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && vis[i - 1])) continue
            perm.push(nums[i])
            vis[i] = true
            backtrack(perm)
            vis[i] = false
            perm.pop()
        }
    }
    nums.sort((a, b) => a - b)
    backtrack([])
    return list
};
// @lc code=end
