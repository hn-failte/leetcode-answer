/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let str = "";
  let maxLength = 0;
  const sLength = s.length;
  for (let i = 0; i < sLength; i++) {
    const strLen = str.length;
    const item = s.charAt(i);
    const index = str.indexOf(item);
    if (index === -1) str += item;
    else {
      if (strLen > maxLength) maxLength = strLen;
      str = str.slice(index + 1);
      str += item;
    }
  }
  return str.length > maxLength ? str.length : maxLength;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = lengthOfLongestSubstring;
// @after-stub-for-debug-end