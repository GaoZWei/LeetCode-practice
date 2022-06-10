// 135.分发糖果
// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。
// 你需要按照以下要求，给这些孩子分发糖果：
// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。

// 贪心:
// 从左向右遍历,更新右边比左边大的情况
// 从右向左遍历,更新左边比右边大的情况 (max额外判断下)

var candy = function (ratings) {
    var n = ratings.length
    var res = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            res[i] = res[i - 1] + 1
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            res[i] = Math.max(res[i], res[i + 1] + 1)
        }
    }
    return res.reduce((a, b) => a + b)
};

var ratings = [1, 2, 2]
var ratings = [1, 0, 2]
console.log(candy(ratings));