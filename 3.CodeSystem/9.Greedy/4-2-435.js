// 435. 无重叠区间
// 给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。
// 返回 需要移除区间的最小数量，使剩余区间互不重叠 。


var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1])
    var end = intervals[0][1]
    var count = 1 //最大的非重复区间
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] >= end) { //左边界>=end,就是非交叉的区间了
            count++
            end = intervals[i][1]
        }
    }
    return intervals.length - count
};

var intervals = [
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
]
// var intervals = [
//     [1, 2],
//     [1, 2],
//     [1, 2]
// ]
console.log(eraseOverlapIntervals(intervals));