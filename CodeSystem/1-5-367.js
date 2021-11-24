// 367. 有效的完全平方数
// 给定一个 正整数 num ，编写一个函数，如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

var isPerfectSquare = function (num) {
    var left = 0
    var right = num
    while (left <= right) {
        var mid = left + ((right - left) >> 1)
        if (mid * mid < num) {
            left = mid + 1
        } else if (mid * mid > num) {
            right = mid - 1
        } else {
            return true
        }
    }
    return false
};

var num = 14
console.log(isPerfectSquare(num))