/*
 * @lc app=leetcode.cn id=47 lang=typescript
 *
 * [47] 全排列 II
 */

// @lc code=start
function permuteUnique(nums: number[]): number[][] {
    const size = nums.length
    const set = new Set<string>()
    let list: number[][] = []
    const pick = (index: number, sorted: number[]) => {
        if (index > size - 1) {
            const key = sorted.join('')
            if (!set.has(key)) {
                set.add(key)
                list.push(sorted)
            }
        } else {
            for (let i = 0; i < size; i++) {
                if (sorted[i] === null) {
                    const _sorted = Array.from(sorted)
                    _sorted[i] = nums[index]
                    pick(index + 1, _sorted)
                }
            }
        }
    }
    pick(0, new Array(size).fill(null))
    return list
};
// @lc code=end
