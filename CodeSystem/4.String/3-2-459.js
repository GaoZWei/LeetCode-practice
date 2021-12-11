// 459. 重复的子字符串
// 给定一个非空的字符串， 判断它是否可以由它的一个子串重复多次构成。
// 给定的字符串只含有小写英文字母， 并且长度不超过10000。

//统一不减一
var repeatedSubstringPattern = function (s) {
    if (s.length == 0) return false
    var getNext = (s) => {
        var j = 0
        var next = []
        next.push(j)
        for (let i = 1; i < s.length; i++) {
            while (j > 0 && s[i] != s[j]) {
                j = next[j - 1]
            }
            if (s[i] == s[j]) {
                j++
            }
            next.push(j)
        }
        return next
    }
    var next = getNext(s)
    if (next[next.length - 1] != 0 && s.length % (s.length - next[next.length - 1]) == 0) {
        return true
    }
    return false
};

//统一减一
var repeatedSubstringPattern = function (s) {
    if (s.length == 0) return false
    var getNext = (s) => {
        var next = []
        var j = -1
        next.push(j)
        for (let i = 1; i < s.length; i++) {
            while (j >= 0 && s[i] != s[j + 1]) {
                j = next[j]
            }
            if (s[i] == s[j + 1]) {
                j++
            }
            next.push(j)
        }
        return next
    }
    var next = getNext(s)
    if (next[next.length - 1] != -1 && s.length % (s.length - (next[next.length - 1] + 1)) == 0) {
        return true
    }
    return false
}

//s+s
var repeatedSubstringPattern = function (s) {
    var tmp = s + s
    tmp = tmp.substring(1, tmp.length - 1)
    return tmp.indexOf(s) == -1 ? false : true
}
var s = "abab"
var s = "abcabcabcabc"
var s = "ababba"
console.log(repeatedSubstringPattern(s))