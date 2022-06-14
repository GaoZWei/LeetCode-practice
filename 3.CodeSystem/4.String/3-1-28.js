// 28. 实现 strStr()
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。

// 暴力+substr
var strStr = function (haystack, needle) {
    var n = needle.length
    if (n == 0) return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            var tmp = haystack.substr(i, n)
            if (tmp == needle) {
                return i
            } else {
                continue
            }
        }
    }
    return -1
};

//KMP算法
var strStr = function (haystack, needle) {
    if (needle.length == 0) return 0
    var getNext = (needle) => {
        var next = []
        var j = 0
        next.push(j)
        for (let i = 1; i < needle.length; i++) { //i从1开始
            while (j > 0 && needle[j] != needle[i]) {
                j = next[j - 1]
            }
            if (needle[i] == needle[j]) {
                j++
            }
            next.push(j)
        }
        return next
    }

    var next = getNext(needle)
    var j = 0
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = next[j - 1]
        }
        if (haystack[i] == needle[j]) {
            j++
        }
        if (j == needle.length) {
            return i - needle.length + 1
        }
    }
    return -1
}

var haystack = "hello",
    needle = "ll"
// var haystack = "aaaaa",
//     needle = "bba"
// var haystack = "",
//     needle = ""

var haystack = "mississippi",
    needle = "issipi"
console.log(strStr(haystack, needle))