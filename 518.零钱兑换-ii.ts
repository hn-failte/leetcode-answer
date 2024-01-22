/*
 * @lc app=leetcode.cn id=518 lang=typescript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
function change(amount: number, coins: number[]): number {
    const dp = new Array(amount + 1).fill(0)
    dp[0] = 1
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin]
        }
    }
    return dp[amount]
};
// @lc code=end
