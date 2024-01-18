/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    // i: 面额
    for (let i = 1; i <= amount; i++) {
        // j: 硬币序数
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] <= i) {
                // 第i个的最少数 = dp[i] 和 第i-coins[j]的最少数 + 1的最小值
                // 加遍历，即所有硬币中的最少的那个
                // 从小到大可以确保已计算的最少始终是正确的
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
// @lc code=end
