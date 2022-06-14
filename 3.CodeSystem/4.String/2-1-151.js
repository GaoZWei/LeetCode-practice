// 151. 翻转字符串里的单词
// 给你一个字符串 s ，逐个翻转字符串中的所有 单词 。
// 单词 是由非空格字符组成的字符串。s 中使用至少一个空格将字符串中的 单词 分隔开。
// 请你返回一个翻转 s 中单词顺序并用单个空格相连的字符串。

// Api写法
var reverseWords = function (s) {
    return s.split(" ").filter(v => v != "").reverse().join(" ");
};

//原字符串操作
var removeExtraSpace = (arr) => {
    var slowIndex = 0
    var fastIndex = 0
    while (fastIndex < arr.length) {
        // 移除开始位置和重复的空格
        if (arr[fastIndex] == " " && (fastIndex == 0 || arr[fastIndex - 1] == " ")) {
            fastIndex++
        } else {
            arr[slowIndex++] = arr[fastIndex++]
        }
    }
    // 移除末尾空格
    arr.length = arr[slowIndex - 1] == " " ? slowIndex - 1 : slowIndex
}

var reverse = (arr, start, end) => {
    var left = start
    var right = end
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
}


//在原字符串上操作
var reverseWords = function (s) {
    var arrStr = Array.from(s)

    removeExtraSpace(arrStr) //删除多余空格

    reverse(arrStr, 0, arrStr.length - 1) //翻转

    var start = 0

    for (let i = 0; i <= arrStr.length; i++) {
        if (arrStr[i] == " " || i == arrStr.length) {
            reverse(arrStr, start, i - 1) //翻转单词
            start = i + 1
        }
    }
    return arrStr.join("")
}

var s = "the sky is blue"
// var s = "  hello world  "
console.log(reverseWords(s))