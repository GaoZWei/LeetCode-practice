// 151.翻转字符串里的单词
// 给定一个字符串，逐个翻转字符串中的每个单词。


//删除多余空格
var removeExtraSpace = (arrStr) => {
    var fastIndex = 0,
        slowIndex = 0
    while (fastIndex < arrStr.length) {
        if (arrStr[fastIndex] == " " && (fastIndex == 0 || arrStr[fastIndex - 1] == " ")) {
            fastIndex++
        } else {
            arrStr[slowIndex++] = arrStr[fastIndex++]
        }
    }
    arrStr.length = arrStr[slowIndex - 1] == " " ? slowIndex - 1 : slowIndex
}

var reverse = (arrStr, start, end) => {
    var left = start
    var right = end
    while (left < right) {
        [arrStr[left], arrStr[right]] = [arrStr[right], arrStr[left]]
        left++
        right--
    }
}

var reverseWords = function (s) {
    var arrStr = Array.from(s)
    removeExtraSpace(arrStr)
    reverse(arrStr, 0, arrStr.length - 1)
    var start = 0
    for (let i = 0; i <= arrStr.length; i++) {
        if (arrStr[i] == " " || i == arrStr.length) {
            reverse(arrStr, start, i - 1)
            start = i + 1
        }
    }
    return arrStr.join("")
}
var s = "the sky is blue"
console.log(reverseWords(s))