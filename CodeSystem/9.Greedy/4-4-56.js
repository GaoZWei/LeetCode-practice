// 56. 合并区间
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    var prev = intervals[0]
    var res = []
    for (let i = 0; i < intervals.length; i++) {
        var cur = intervals[i]
        if (cur[0] > prev[1]) {
            res.push(prev)
            prev = cur
        } else {
            prev[1] = Math.max(cur[1], prev[1])
        }
    }
    res.push(prev)
    return res
};

var intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
]
console.log(merge(intervals));