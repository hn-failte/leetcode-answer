/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let profile = 0
    for (let i = 0; i < prices.length - 1; i++) {
        profile += Math.max(0, prices[i + 1] - prices[i])
    }
    return profile
};
// @lc code=end
