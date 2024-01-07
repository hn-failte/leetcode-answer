/*
 * @lc app=leetcode.cn id=1689 lang=typescript
 *
 * [1689] 十-二进制数的最少数目
 */

// @lc code=start
function minPartitions(n: string): number {
    for (let i = 9; i > -1; i--) if (n.includes(i + '')) return i
};
// @lc code=end
