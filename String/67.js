// 67. 二进制求和
// 给你两个二进制字符串，返回它们的和（用二进制表示）
// 输入: a = "11", b = "1"
// 输出: "100"

//思路1:逐位相加
var addBinary = function (a, b) {
    while (a.length > b.length) b = "0" + b
    while (b.length > a.length) a = "0" + a
    var res = new Array(a.length)
    var sum = 0
    var carry = 0
    for (let i = a.length - 1; i >= 0; i--) {
        sum = Number(a[i]) + Number(b[i]) + carry
        if (sum >= 2) {
            res[i] = sum - 2
            carry = 1
        } else {
            res[i] = sum
            carry = 0
        }
    }
    if (carry) {
        res.unshift(1)
    }
    return res.join('')
};

// 思路2:优化
// 异或:进行不进位的相加
// &&:得出进位,考虑上一轮的进位,算出下一轮的进位
var addBinary = function (a, b) {
    while (a.length > b.length) b = "0" + b
    while (b.length > a.length) a = "0" + a
    var res = new Array(a.length)
    var val //不进位的结果
    var carry //当前的进位
    var carryBefore = 0 //上一轮的进位
    for (let i = a.length - 1; i >= 0; i--) {
        val = Number(a[i]) ^ Number(b[i])
        carry = Number(a[i]) & Number(b[i])
        if (carryBefore) {
            if (val == 0) {
                val = 1
            } else {
                carry = 1
                val = 0
            }
        }
        carryBefore = carry
        res.unshift(val)
    }
    if (carry) res.unshift(1)
    return res.join('')
}
var a = "11",
    b = "1"
console.log(addBinary(a, b))