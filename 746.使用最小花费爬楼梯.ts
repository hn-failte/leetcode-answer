/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
    // dp[n] = min(dp[n - 1] + cost[n - 1], dp[n - 2] + cost[n - 2])
    const dp = new Array(cost.length + 1).fill(0)
    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    }
    return dp[cost.length]
};
// @lc code=end
