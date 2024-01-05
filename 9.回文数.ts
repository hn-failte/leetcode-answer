/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x < 0) return false
    let cur = x
    let num = 0
    while (cur > 0) {
        num = num * 10 + cur % 10
        cur = Math.floor(cur / 10)
    }
    return num === x
};
// @lc code=end
