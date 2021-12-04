// 438. 找到字符串中所有字母异位词
// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

//正常遍历
var isAnagram = (a, b) => {
    if (a.length != b.length) return false
    var array = new Array(26).fill(0)
    var base = "a".charCodeAt()
    for (let i = 0; i < a.length; i++) {
        array[a[i].charCodeAt() - base]++
    }
    for (let j = 0; j < b.length; j++) {
        if (!array[b[j].charCodeAt() - base]) return false
        else array[b[j].charCodeAt() - base]--
    }
    return true
}

var findAnagrams = function (s, p) {
    var res = []
    for (let i = 0; i < s.length - p.length + 1; i++) {
        var tmp = s.substring(i, i + p.length)
        if (isAnagram(tmp, p)) {
            res.push(i)
        }
    }
    return res
};

//滑动窗口
var findAnagrams = function (s, p) {
    var res = []
    var sLen = s.length
    var pLen = p.length
    if (sLen < pLen) return []
    var sCount = new Array(26).fill(0)
    var pCount = new Array(26).fill(0)
    for (let i = 0; i < pLen; i++) {
        pCount[p[i].charCodeAt() - "a".charCodeAt()]++
        sCount[s[i].charCodeAt() - "a".charCodeAt()]++
    }

    if (pCount.toString() == sCount.toString()) res.push(0)

    for (let i = 0; i < sLen - pLen; i++) {
        sCount[s[i].charCodeAt() - "a".charCodeAt()]--
        sCount[s[i + pLen].charCodeAt() - "a".charCodeAt()]++
        if (sCount.toString() == pCount.toString()) {
            res.push(i + 1)
        }
    }
    return res
};

// 优化的滑动窗口
var findAnagrams = function (s, p) {
    var res = []
    var sLen = s.length
    var pLen = p.length
    if (sLen < pLen) return []
    var count = new Array(26).fill(0)
    for (let i = 0; i < pLen; i++) {
        count[s[i].charCodeAt() - "a".charCodeAt()]++
        count[p[i].charCodeAt() - "a".charCodeAt()]-- //此处创造出-1
    }
    var differ = 0
    for (let i = 0; i < 26; i++) {
        if (count[i] != 0) {
            differ++
        }
    }
    if (differ == 0) res.push(0)

    for (let i = 0; i < sLen - pLen; i++) {
        if (count[s[i].charCodeAt() - "a".charCodeAt()] == 1) differ--
        else if (count[s[i].charCodeAt() - "a".charCodeAt()] == 0) differ++
        count[s[i].charCodeAt() - "a".charCodeAt()]--
        if (count[s[i + pLen].charCodeAt() - "a".charCodeAt()] == -1) { //注意这块是-1
            differ--
        } else if (count[s[i + pLen].charCodeAt() - "a".charCodeAt()] == 0) differ++
        count[s[i + pLen].charCodeAt() - "a".charCodeAt()]++
        if (differ == 0) res.push(i + 1)
    }
    return res
}
var s = "cbaebabacd",
    p = "abc"
// var s = "abab",
//     p = "ab"
// var s = "aa",
//     p = "bb"
console.log(findAnagrams(s, p))