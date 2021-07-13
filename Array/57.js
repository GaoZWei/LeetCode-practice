//插入区间
// 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

// 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。.
// 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
// 输出：[[1,5],[6,9]]
// 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// 输出：[[1,2],[3,10],[12,16]]
// 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

// 输入：intervals = [], newInterval = [5,7]
// 输出：[[5,7]]

//自己写的,没完成
var insert = function (intervals, newInterval) {
    var len = intervals.length
    for (let i = 0; i < len; i++) {
        // console.log(intervals[i][0]) //每个子数组的第一个
        if (intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0]) { //左侧区间比插入的左侧小或相等
            console.log(i)
            if (intervals[i][1] > newInterval[1]) { //全包含
                return intervals
            }
        }
    }
};


//画图解决
//分别判断不重叠,重叠,剩余的,将他们推进数组
var insert = function (intervals, newInterval) {
    var len = intervals.length
    var res = []
    var i = 0
    while (i < len && intervals[i][1] < newInterval[0]) { //前面的不重叠
        res.push(intervals[i])
        i++
    }
    while (i < len && intervals[i][0] <= newInterval[1]) { //有重叠  (反推得出) (没重叠:绿的左端,落在蓝的右端的后面=>重叠:绿的左端<=蓝的右端)
        newInterval[0] = Math.min(intervals[i][0], newInterval[0])
        newInterval[1] = Math.max(intervals[i][1], newInterval[1])
        i++
    }
    res.push(newInterval)
    while (i < len) { //后面的不重叠
        res.push(intervals[i])
        i++
    }
    return res
};
var intervals = [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16]
]
var newInterval = [4, 8]
var intervals = [
    [1, 5]
]
var newInterval = [2, 3]
console.log(insert(intervals, newInterval))