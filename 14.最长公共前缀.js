/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let minStr = strs[0];
  let longestPrefix = "";
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < minStr.length) minStr = strs[i];
  }
  for (let j = minStr.length; j > 0; j--) {
    const prefix = minStr.slice(0, j);
    let exist = true;
    for (let k = 0; k < strs.length; k++) {
      if (!strs[k].startsWith(prefix)) exist = false;
    }
    if (longestPrefix.length > prefix.length) break;
    if (exist) {
      longestPrefix = prefix;
    }
  }
  return longestPrefix;
};
// @lc code=end
