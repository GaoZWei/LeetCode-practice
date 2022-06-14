// 541. 反转字符串 II
// 给定一个字符串 s 和一个整数 k，从字符串开头算起，每计数至 2k 个字符，就反转这 2k 字符中的前 k 个字符。
// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

var reverseStr = function (s, k) {
    var len = s.length
    var array = s.split("")
    for (let i = 0; i < len; i += 2 * k) { //2k的步数跳跃
        var left = i - 1
        var right = i + k > len ? len : i + k
        while (++left < --right) {
            [array[left], array[right]] = [array[right], array[left]]
        }
    }
    return array.join("")
};

var s = "abcdefg",
    k = 2
console.log(reverseStr(s, k))