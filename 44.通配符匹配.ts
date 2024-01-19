/*
 * @lc app=leetcode.cn id=44 lang=typescript
 *
 * [44] 通配符匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
    const dp: boolean[][] = new Array(s.length + 1).fill(null).map(() => new Array(p.length + 1).fill(false))
    dp[0][0] = true
    // 对 s 为空字符串做处理，任意个数的*均能匹配空字符串
    for (let i = 1; i <= p.length; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = true
        } else {
            break
        }
    }
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                // * 匹配空字符串，即：s 的前 j 项能被 p 的前 i 项匹配 ，则 s 的前 j 项能被 p 的前 i - 1 项匹配，如：AB AB*
                // * 匹配多个字符串，即：s 的前 j 项能被 p 的前 i 项匹配 ，则 s 的前 j - 1 项也可能被 p 的前 i 项匹配，如：ABCD AB*
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j]
            } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                // s 的前 j 项能被 p 的前 i 项匹配 ，则 s 的前 j - 1 项能被 p 的前 i - 1 项匹配
                dp[i][j] = dp[i - 1][j - 1]
            }
        }
    }

    return dp[s.length][p.length]
};
// @lc code=end
