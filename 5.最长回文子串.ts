/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let p1 = 0, p2 = s.length - 1;
    let maxlen = 1;
    let pmax = 0;
    while (p1 < s.length) {
        const len = p2 - p1 + 1;
        let isLoop = true;
        for (let m = 0; m < Math.ceil(len / 2); m++) {
            if (s[p1 + m] !== s[p2 - m]) {
                isLoop = false;
                break;
            }
        }
        if (isLoop && len > maxlen) {
            maxlen = len;
            pmax = p1;
        }
        if (p2 > p1) {
            p2 --;
        } else {
            p1++;
            p2 = s.length - 1;
        }
    }
    return s.slice(pmax, pmax + maxlen);
};
// @lc code=end
