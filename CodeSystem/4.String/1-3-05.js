// 剑指 Offer 05. 替换空格
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

//辅助空间
var replaceSpace = function (s) {
    var array = s.split(" ")
    return array.join("%20")
};

//原数组操作
var replaceSpace = function (s) {
    var arrayStr = Array.from(s)
    var count = 0
    for (let i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i] == " ") {
            count++
        }
    }
    var left = arrayStr.length - 1
    var right = arrayStr.length + count * 2 - 1
    while (left >= 0) {
        if (arrayStr[left] == " ") {
            arrayStr[right--] = "0"
            arrayStr[right--] = "2"
            arrayStr[right--] = "%"
            left--
        } else {
            arrayStr[right--] = arrayStr[left--]
        }
    }
    return arrayStr.join('')
}

var s = "We are happy."
console.log(replaceSpace(s))