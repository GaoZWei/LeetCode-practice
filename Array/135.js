// 135.分发糖果

// 老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。
// 你需要按照以下要求，帮助老师给这些孩子分发糖果：
// 每个孩子至少分配到 1 个糖果。
// 评分更高的孩子必须比他两侧的邻位孩子获得更多的糖果。
// 那么这样下来，老师至少需要准备多少颗糖果呢？

// 输入：[1,0,2]
// 输出：5

//双循环 (左右两种遍历都满足,取较大的)
var candy = function (ratings) {
    var n = ratings.length
    var left = new Array(n).fill(0)
    var res = 0
    // 从左向右遍历
    for (let i = 0; i < n; i++) {
        if (i > 0 && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1
        } else {
            left[i] = 1
        }
    }

    // 从右向左遍历
    var right = 0
    for (let i = n - 1; i >= 0; i--) {
        if (i < n - 1 && ratings[i] > ratings[i + 1]) {
            right++
        } else {
            right = 1
        }
        res += Math.max(left[i], right)
    }
    return res
};

//常数空间遍历 (难理解)
var candy = function (ratings) {
    var n = ratings.length
    var res = 1
    var pre = 1
    var dec = 0 //当前的递减序列长度
    var inc = 1 //最近的递增序列长度
    for (let i = 1; i < n; i++) {
        if (ratings[i] >= ratings[i - 1]) {
            dec = 0
            if (ratings[i] == ratings[i - 1]) {
                pre = 1
            } else {
                pre++
            }
            res += pre
            inc = pre
        } else {
            dec++
            if (dec == inc) {
                dec++
            }
            res += dec
            pre = 1
        }
    }
    return res
}

var ratings = [1, 0, 2]
console.log(candy(ratings))