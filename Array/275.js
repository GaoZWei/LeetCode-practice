// H 指数 II
// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数，
// citations 已经按照 升序排列 。计算并返回该研究者的 h 指数。
// 对数时间复杂度lgn

// 二分法
// 每次在查找范围内取中点 mid，则有 n−mid 篇论文被引用了至少 citations[mid] 次。
var hIndex = function (citations) {
    var n = citations.length
    var left = 0
    var right = n - 1
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (citations[mid] >= n - mid) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return n - left
};

var citations = [0, 1, 2, 5, 6]
// var citations = [1, 2, 100]
console.log(hIndex(citations))