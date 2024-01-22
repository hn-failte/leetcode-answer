/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    const n = prices.length;
    let min = prices[0]
    let offset = prices[0]
    let profile1 = 0, profile2 = 0
    for (let i = 1; i < n; i++) {
        min = Math.min(min, prices[i])
        profile1 = Math.max(profile1, prices[i] - min)
        offset = Math.min(offset, prices[i] - profile1)
        profile2 = Math.max(profile2, prices[i] - offset)
    }
    return profile2
};
// @lc code=end
