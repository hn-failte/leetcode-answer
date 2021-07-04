/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0;
    const res = +String(x).slice(+sign).split('').reverse().join('');
    return Math.pow(2, 31) - 1 > res
      ? (sign ? -1 : 1) * res
      : 0
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = reverse;
// @after-stub-for-debug-end
