/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
    if (n < 2) return n
    let c = 1 // n
    let p = 0 // n - 1
    let q = 0 // n - 2
    for(let i = 2; i <= n; i++) {
        q = p
        p = c
        // f(n) = f(n - 1) + f(n - 2)
        c = p + q
    }
    return c
};
// @lc code=end
