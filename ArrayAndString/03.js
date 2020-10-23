//合并区间
// 给出一个区间的集合，请合并所有重叠的区间。
// 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// var merge = function (intervals) {
//     if (intervals.length === 0) return []
//     let res = []
//     intervals.sort((a, b) => a[0] - b[0]) //数组首位排序函数sort
//     let candidate = intervals[0] //排序后选择第一个数组  (临时空间)
//     for (let i = 1; i < intervals.length; i++) {
//         let cur = intervals[i] //从第二个开始取cur
//         if (candidate[1] >= cur[0]) { // 有重合 能合并
//             candidate[1] = Math.max(cur[1], candidate[1]) // 左端不变 右端取大的
//         } else { // 不重合 不能合并
//             res.push(candidate)
//             candidate = cur //把cur放进去临时控件
//         }
//     }
//     res.push(candidate)
//     return res
// };



var merge = function (intervals) {
    if (intervals.length == 0) return []
    let res = []
    intervals.sort((a, b) => a[0] - b[0])
    let tmp = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i]
        if (tmp[1] >= cur[0]) {
            tmp[1] = Math.max(tmp[1], cur[1])
        } else {
            res.push(tmp)
            tmp = cur
        }
    }
    res.push(tmp)
    return res
};


intervals = [
    [1, 3],
    [4, 9],
    [8, 10],
    [15, 18]
]
console.log(merge(intervals))