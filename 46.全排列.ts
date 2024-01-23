/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start
function permute(nums: number[]): number[][] {
    const size = nums.length
    const list: number[][] = []
    const vis: boolean[] = []
    const pick = (selected: number[]) => {
        if (selected.length === size) return list.push(selected.slice())
        for (let i = 0; i < size; i++) {
            if (vis[i]) continue
            selected.push(nums[i])
            vis[i] = true
            pick(selected)
            vis[i] = false
            selected.pop()
        }
    }
    pick([])
    return list
};
// @lc code=end
