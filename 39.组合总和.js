/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  // 有效数据排序
  candidates.sort((a, b) => a - b);
  const results = [];
  const length = candidates.length;
  const comb = (start, sum, arr) => {
    if (sum >= target) return sum === target ? results.push(arr) : void 0;
    for (let index = start; index < length; index++) {
      const combItem = candidates[index];
      const nextSum = sum + combItem;
      if (nextSum <= target) comb(index, nextSum, arr.concat(combItem));
    }
  };
  // 主要的遍历
  comb(0, 0, []);
  return results;
};

// var combinationSum = function(candidates, target) {
//   let results = [];
//   const comb = (index, tempSum, tempArr, candidates) => {
//     if (tempSum < target) {
//       for (let m = index; m < candidates.length; m++) {
//         const combItem = candidates[m];
//         const curSum = tempSum + combItem;
//         if (curSum > target) break;
//         else comb(m, curSum, tempArr.concat(combItem), candidates);
//       }
//     } else if (tempSum === target) {
//       results.push(tempArr);
//     }
//   };
// // 数组元素前置判断
// for (let i = 0; i < candidates.length; i++) {
//   const item = candidates[i];
//   if (item < target) {
//   } else if (item === target) {
//     results.push(candidates.splice(i--, 1));
//   } else {
//     candidates.splice(i--, 1);
//   }
// }
//   // 有效数据排序
//   candidates.sort((a, b) => a - b);
//   // 主要的遍历
//   for (let i = 0; i < candidates.length; i++) {
//     comb(i, candidates[i], [candidates[i]], candidates);
//   }
//   return results;
// };
// @lc code=end

// @after-stub-for-debug-begin
module.exports = combinationSum;
// @after-stub-for-debug-end
