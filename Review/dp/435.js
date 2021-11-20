// 435. 无重叠区间(动态规划+贪心)
// 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠

//动态规划
var eraseOverlapIntervals = function (intervals) {
    var n = intervals.length
    intervals.sort((a, b) => a[1] - b[1])
    var dp = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[i][0] >= intervals[j][1]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return n - Math.max(...dp)
}

//贪心
var eraseOverlapIntervals = function (intervals) {
    var n = intervals.length
    intervals.sort((a, b) => a[1] - b[1]) //需要按区间右端点排序
    var count = 1
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