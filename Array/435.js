// 435. 无重叠区间
// 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
// 注意:
// 可以认为区间的终点总是大于它的起点。
// 区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。

// 输入: [ [1,2], [2,3], [3,4], [1,3] ]
// 输出: 1
// 解释: 移除 [1,3] 后，剩下的区间没有重叠。


//思路一:找端点(超时)
var eraseOverlapIntervals = function (intervals) {
    var n = intervals.length
    intervals.sort((a, b) => a[0] - b[0])
    var f = new Array(n).fill(1)

    for (let i = 1; i < n; i++) { //i作为最后一个区间
        for (let j = 0; j < i; j++) { //j是i前面的区间
            if (intervals[i][0] >= intervals[j][1]) {
                f[i] = Math.max(f[i], f[j] + 1)
            }
        }
    }
    return n - Math.max(...f)
};

//思路2:按照右边界排序,从左向右记录非交叉区间的个数
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    var n = intervals.length
    var count = 1 //非交叉区间的个数
    var end = intervals[0][1]
    for (let i = 1; i < n; i++) {
        if (intervals[i][0] >= end) {
            count++
            end = intervals[i][1]
        }
    }
    return n - count
}
var intervals = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
]
console.log(eraseOverlapIntervals(intervals))