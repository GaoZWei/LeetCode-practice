// 加1
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。

// 思路:
// 不进位: 直接 + 1
// 进位: 变0, 前一位＋ 1
// 不断进位:999->1000
var plusOne = function (digits) {
    var len = digits.length
    for (let i = len - 1; i >= 0; i--) {
        digits[i]++
        digits[i] %= 10 //取余就是这个数
        if (digits[i] != 0) { //不是0,直接返回
            return digits
        }
    }
    // return [1, ...digits]  与下面同理
    digits.unshift(1)
    return digits
};
var digits = [1, 2, 3]
var digits = [9, 9, 9]

console.log(plusOne(digits))