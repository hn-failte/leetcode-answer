/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
    let r = 1 // n
    let p = 0 // n - 1
    let q = 0 // n - 2
    for (let i = 1; i <= n; i++) {
        q = p
        p = r
        r = p + q
    }
    return r
};
// @lc code=end
