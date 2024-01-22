/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let minprice = Number.MAX_SAFE_INTEGER; // 最低价
    let maxprofit = 0; // 最大利润
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minprice) {
            minprice = prices[i];
        } else {
            maxprofit = Math.max(maxprofit, prices[i] - minprice)
        }
    }
    return maxprofit;

};
// @lc code=end
