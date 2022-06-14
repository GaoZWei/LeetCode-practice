// 剑指 Offer 58 - II. 左旋转字符串
// 请定义一个函数实现字符串左旋转操作的功能。
// 比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

// api
var reverseLeftWords = function (s, n) {
    // slice和substring接收的是起始位置和结束位置，而substr接收的则是起始位置和所要返回的字符串长度
    var a = s.slice(0, n)
    var b = s.substring(n, s.length) //包括 开始 处的字符，但不包括 结束 处的字符。
    // var b = s.slice(n, s.length)  //都可以
    return b + a
};

//两次局部反转+全局反转
var reverse = (str, left, right) => {
    var arrStr = str.split("")
    while (left < right) {
        [arrStr[left], arrStr[right]] = [arrStr[right], arrStr[left]]
        left++
        right--
    }
    return arrStr.join("")
}

var reverseLeftWords = function (s, n) {
    s = reverse(s, 0, n - 1)
    s = reverse(s, n, s.length - 1)
    return reverse(s, 0, s.length - 1)
}

var s = "abcdefg",
    k = 2
console.log(reverseLeftWords(s, k))