// 738. 单调递增的数字
// 当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。
// 给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。

// 贪心
var monotoneIncreasingDigits = function (n) {
    //数字变成数字数组!!!
    n = n.toString()
    n = n.split('').map(item => {
        return +item
    })
    let flag = Infinity //判断从哪里赋值9
    for (let i = n.length - 1; i >= 0; i--) {
        if (n[i] < n[i - 1]) {
            flag = i
            n[i - 1]--
            n[i] = 9
        }
    }
    for (let i = flag; i < n.length; i++) {
        n[i] = 9
    }
    return +n.join('')
};

var n = 1009 //特殊情况 没有flag 909
var n = 12009

console.log(monotoneIncreasingDigits(n));