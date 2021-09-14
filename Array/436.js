// 436. 寻找右区间
// 给你一个区间数组 intervals ，其中 intervals[i] = [starti, endi] ，且每个 starti 都 不同 。
// 区间 i 的 右侧区间 可以记作区间 j ，并满足 startj >= endi ，且 startj 最小化 。
// 返回一个由每个区间 i 的 右侧区间 的最小起始位置组成的数组。如果某个区间 i 不存在对应的 右侧区间 ，则下标 i 处的值设为 -1 。

// 输入：intervals = [[3,4],[2,3],[1,2]]
// 输出：[-1, 0, 1]
// 解释：对于 [3,4] ，没有满足条件的“右侧”区间。
// 对于 [2,3] ，区间[3,4]具有最小的“右”起点;
// 对于 [1,2] ，区间[2,3]具有最小的“右”起点。

// 双循环+遍历
var findRightInterval = function (intervals) {
    var n = intervals.length
    if (n == 1) return [-1]
    var res = []
    for (let i = 0; i < n; i++) {
        var tmp = Infinity
        var tmpIndex = -1
        var endI = intervals[i][1]
        for (let j = 0; j < n; j++) {
            // if (j == i) continue  [1,1]的特殊情况
            if (intervals[j][0] >= endI) { //先找到比i右区间大的,再在这些里面比较较小的   (key!!!)
                if (intervals[j][0] < tmp) {
                    tmp = intervals[j][0]
                    tmpIndex = j
                }
            }
        }
        res.push(tmpIndex)
    }
    return res
};

var intervals = [
    [3, 4],
    [2, 3],
    [1, 2]
]
var intervals = [
    [1, 4],
    [2, 3],
    [3, 4]
]
// var intervals = [
//     [1, 1],
//     [3, 4]
// ]
var intervals = [[3,4],[6,7],[5,6]]
console.log(findRightInterval(intervals))