// 76. 最小覆盖子串(滑动窗口)
// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

var minWindow = function (s, t) {
    var minLen = s.length + 1
    var start = s.length
    var map = {}
    var missingType = 0

    for (var c of t) {
        if (!map[c]) {
            missingType++
            map[c] = 1
        } else {
            map[c]++
        }
    }
    var l = 0,
        r = 0
    for (; r < s.length; r++) {
        var rightChar = s[r]
        if (map[rightChar] != undefined) {
            map[rightChar]--
        }
        if (map[rightChar] == 0) {
            missingType--
        }
        while (missingType == 0) {
            if (r - l + 1 < minLen) {
                minLen = r - l + 1
                start = l
            }
            var leftChar = s[l]
            if (map[leftChar] != undefined) map[leftChar]++
            if (map[leftChar] > 0) missingType++
            l++
        }
    };
    if (start == s.length) return ""
    return s.substring(start, start + minLen)
}


var s = "ADOBECODEBANC",
    t = "ABC"
console.log(minWindow(s, t))