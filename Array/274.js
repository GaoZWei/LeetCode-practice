// H 指数
// 给你一个整数数组 citations ，其中 citations[i] 表示研究者的第 i 篇论文被引用的次数。
// 计算并返回该研究者的 h 指数。
// h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （n 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。且其余的 n - h 篇论文每篇被引用次数 不超过 h 次。
// 例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 次的论文总共有 20 篇。
// 输入：citations = [3,0,6,1,5]
// 输出：3 

// 思路1:
// 排序＋判断
var hIndex = function (citations) {
    citations.sort((a, b) => a - b)
    var i = citations.length - 1
    var h = 0
    while (i >= 0 && h < citations[i]) {
        i--
        h++
    }
    return h
};

//计数排序
// 1.计数当前引用论文有几篇
// 超过n的按n计算
// 2.从后遍历,在counter数组中找到大于或等于当前引用i的总论文数,返回
var hIndex = function (citations) {
    var n = citations.length
    var counter = new Array(n + 1).fill(0)
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= n) {
            counter[n]++
        } else {
            counter[citations[i]]++
        }
    }

    var total = 0
    for (let j = n; j >= 0; j--) {
        total += counter[j]
        if (total >= j) {
            return j
        }
    }
    return 0
}
var citations = [3, 0, 6, 1, 5]
// var citations = [1, 3, 1]
console.log(hIndex(citations))