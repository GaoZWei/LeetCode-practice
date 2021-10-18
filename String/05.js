// 5. 最长回文子串
// 给你一个字符串 s，找到 s 中最长的回文子串(对称的结构)。
// 输入：s = "babad"
// 输出："bab"

// 思路:中心扩散法
var longestPalindrome = function (s) {
    if (s.length < 2) return s
    var res = ''
    for (let i = 0; i < s.length; i++) {
        help(i, i)
        help(i, i + 1)
    }

    function help(left, right) {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            left--
            right++
        }
        if (right - left - 1 > res.length) {
            res = s.slice(left + 1, right) //slice 使用 start（包含） 和 end（不包含） 参数来指定字符串提取的部分
        }
    }
    return res
};

var s = "babad"
console.log(longestPalindrome(s))