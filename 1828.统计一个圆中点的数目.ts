/*
 * @lc app=leetcode.cn id=1828 lang=typescript
 *
 * [1828] 统计一个圆中点的数目
 */

// @lc code=start
function countPoints(points: Array<[number, number]>, queries: Array<[number, number, number]>): number[] {
    const results: number[] = new Array(queries.length).fill(0)
    const isPointInCircle = ([x, y]: [number, number], [x0, y0, r]: [number, number, number]) => {
        return (x - x0) * (x - x0) + (y - y0) * (y - y0) <= r * r
    }

    for (let i = 0; i < queries.length; i++) {
        const circle = queries[i]
        for (let j = 0; j < points.length; j++) {
            const point = points[j]
            if (isPointInCircle(point, circle)) results[i] += 1
        }
    }

    return results
};
// @lc code=end
