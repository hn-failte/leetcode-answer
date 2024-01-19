/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let max = 0
    let cache = ''
    for (let i = 0; i < s.length; i++) {
        const index = cache.indexOf(s[i])
        if (index > -1) {
            cache = cache.slice(index + 1)
        }
        cache += s[i]
        max = Math.max(max, cache.length)
    }
    return max
};
// @lc code=end
