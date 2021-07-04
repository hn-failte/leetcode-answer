/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  const tlen = nums1.length + nums2.length;
  const pms = tlen % 2 ? [(tlen - 1) / 2] : [tlen / 2 - 1, tlen / 2];
  const mnums = [];
  for (let i = 0; i <= pms[pms.length - 1]; i++) {
    let item = null;
    if (p1 >= nums1.length) {
      item = nums2[p2];
      p2++;
    } else if (p2 >= nums2.length) {
      item = nums1[p1];
      p1++;
    } else {
      const num1 = nums1[p1];
      const num2 = nums2[p2];
      if (num1 > num2) {
        item = num2;
        p2++;
      } else {
        item = num1;
        p1++;
      }
    }
    if (i === pms[0]) mnums[0] = item;
    if (i === pms[1]) mnums[1] = item;
  }
  return mnums.length > 1 ? (mnums[0] + mnums[1]) / 2 : mnums[0];
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = findMedianSortedArrays;
// @after-stub-for-debug-end
