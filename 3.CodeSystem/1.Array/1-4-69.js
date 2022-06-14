// 69. Sqrt(x)
// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。
// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

var mySqrt = function (x) {
    var left = 0
    var right = x
    while (left <= right) {
        var mid = left + ((right - left) >> 1)
        if (mid * mid == x) {
            return mid
        } else if (mid * mid < x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right //会向下取整,所以取right
};
var x = 8
console.log(mySqrt(x))