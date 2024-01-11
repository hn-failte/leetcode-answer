/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
    let first = 0
    let last = height.length - 1
    let maxSquare = 0
    const calcSquara = (start, end) => {
        const minHeight = Math.min(height[start], height[end])
        const width = Math.abs(end - start)
        return minHeight * width
    }
    while (first < last) {
        maxSquare = Math.max(calcSquara(first, last), maxSquare)
        if (height[first] < height[last]) {
            first++
        } else {
            last--
        }
    }
    return maxSquare
};
// @lc code=end
