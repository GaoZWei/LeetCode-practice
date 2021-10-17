// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

//思路一:Set来判断是否存在
var lengthOfLongestSubstring = function (s) {
    var set = new Set()
    var n = s.length
    var res = 0
    var right = -1
    for (let i = 0; i < n; i++) {
        if (i != 0) {
            set.delete(s.charAt(i - 1))
        }
        while (right + 1 < n && !set.has(s.charAt(right + 1))) {
            set.add(s.charAt(right + 1))
            right++
        }
        res = Math.max(res, right - i + 1)
    }
    return res
};

//思路二:辅助空间arr
var lengthOfLongestSubstring = function (s) {
    var arr = []
    var res = 0
    for (let i = 0; i < s.length; i++) {
        var index = arr.indexOf(s[i])
        if (index != -1) {
            arr.splice(0, index + 1)
        }
        arr.push(s[i])
        res = Math.max(arr.length, res)
    }
    return res
}

// 思路三:substring(效率最高)
var lengthOfLongestSubstring = function (s) {
    var res = 0
    for (let i = 0, j = 0; j < s.length; j++) {
        var index = s.substring(i, j).indexOf(s[j])
        if (index != -1) {
            i = i + index + 1
        }
        res = Math.max(res, j - i + 1)
    }
    return res
}

var s = "abcabcbb"
var s = "bbbbb"
var s = "pwwkew"
console.log(lengthOfLongestSubstring(s))