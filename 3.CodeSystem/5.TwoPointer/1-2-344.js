// 344. 反转字符串
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

var reverseString = function (s) {
    var left = -1
    var right = s.length
    while (++left < --right) {
        [s[left], s[right]] = [s[right], s[left]]
    }
    return s
}

var s = ["h", "e", "l", "l", "o"]
console.log(reverseString(s))