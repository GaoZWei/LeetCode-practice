// 剑指Offer 05.替换空格
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

var replaceSpace = function (s) {
    var arrStr = Array.from(s)
    var count = 0
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] == " ")
            count++
    }

    var left = arrStr.length - 1
    var right = arrStr.length + 2 * count - 1

    while (left >= 0) {
        if (arrStr[left] == " ") {
            arrStr[right--] = "0"
            arrStr[right--] = "2"
            arrStr[right--] = "%"
            left--
        } else {
            arrStr[right--] = arrStr[left--]
        }
    }
    return arrStr.join("")
}

var s = "We are happy."
console.log(replaceSpace(s))