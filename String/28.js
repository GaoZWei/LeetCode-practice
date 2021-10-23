// 28. 实现 strStr()
// 实现 strStr() 函数。
// 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
//思路1:暴力
var strStr = function (haystack, needle) {
    if (needle == "") return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            var j = 0
            var tmpi = i
            while (tmpi < haystack.length && j < needle.length && haystack[tmpi] == needle[j]) {
                tmpi++
                j++
            }
            if (j == needle.length) {
                return i
            }
        }
    }
    return -1
};

//思路2:用flag标识
var strStr = function (haystack, needle) {
    if (needle == "") return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            var flag = true
            for (let j = 1; j < needle.length; j++) {
                if (haystack[i + j] != needle[j]) {
                    flag = false
                }
            }
            if (flag) return i
        }
    }
    return -1
}
//用substring
var strStr = function (haystack, needle) {
    if (needle == "") return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            if (haystack.substring(i, i + needle.length) == needle) {
                return i
            }
        }
    }
    return -1
}


var haystack = "hlello",
    needle = "lo"
// var haystack = "aaaaa",
//     needle = "bba"
// var haystack = "",
//     needle = ""
console.log(strStr(haystack, needle))