// 844. 比较含退格的字符串
// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，请你判断二者是否相等。# 代表退格字符。
// 如果相等，返回 true ；否则，返回 false 。

var backspaceCompare = function (s, t) {
    var i = s.length - 1
    var j = t.length - 1
    var skipI = 0
    var skipJ = 0
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] == "#") {
                skipI++
                i--
            } else if (skipI >0) {
                skipI--
                i--
            } else {
                break
            }
        }
        while (j >= 0) {
            if (t[j] == "#") {
                skipJ++
                j--
            } else if (skipJ > 0) {
                skipJ--
                j--
            } else {
                break
            }
        }
        if (s[i] != t[j]) return false
        i--
        j--
    }
    return true
};

var s = "ab#c",
    t = "ad#c"
var s = "a#c",
    t = "b"
var s = "xywrrmp",
    t = "xywrrmu#p"
console.log(backspaceCompare(s, t))