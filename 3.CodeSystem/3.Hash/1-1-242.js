// 242. 有效的字母异位词
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

//Map实现
var isAnagram = function (s, t) {
    if (s.length != t.length) return false
    var mapS = new Map()
    for (let i = 0; i < s.length; i++) {
        if (!mapS.get(s[i])) {
            mapS.set(s[i], 1)
        } else {
            mapS.set(s[i], mapS.get(s[i]) + 1)
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (mapS.get(t[j]) > 0) {
            mapS.set(t[j], mapS.get(t[j]) - 1)
        } else {
            return false
        }
    }
    return true
};

//Array+charCodeAt实现
var isAnagram = function (s, t) {
    if (s.length != t.length) return false
    var resSet = new Array(26).fill(0)
    var base = "a".charCodeAt()
    for (let i = 0; i < s.length; i++) {
        resSet[s[i].charCodeAt() - base]++
    }
    for (let j = 0; j < t.length; j++) {
        if (!resSet[t[j].charCodeAt() - base]) return false
        resSet[t[j].charCodeAt() - base]--
    }
    return true
}
var s = "anagram",
    t = "nagaram"
// var s = "rat",
//     t = "car"
console.log(isAnagram(s, t))