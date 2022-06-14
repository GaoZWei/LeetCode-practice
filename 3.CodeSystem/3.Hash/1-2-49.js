// 49. 字母异位词分组
// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

//回溯失败
var isAnagrams = (a, b) => {
    if (a.length != b.length) return false
    var resSet = new Array(26).fill(0)
    var base = "a".charCodeAt()
    for (let i = 0; i < a.length; i++) {
        resSet[a[i].charCodeAt - base]++
    }
    for (let j = 0; j < b.length; j++) {
        if (resSet[b[j].charCodeAt() - base]) {
            resSet[b[j].charCodeAt() - base]--
        } else {
            return false
        }
    }
    return true
}

var groupAnagrams = function (strs) {
    if (strs.length <= 1) return [strs]
    var res = []
    var tmp = []

    var dfs = (strs, index) => {
        if (index == strs.length - 1) {
            res.push(tmp.slice())
        }
        for (let i = index; i < strs.length; i++) {
            tmp.push()
        }
    }
    dfs(strs, 0)
    return res
};


//map+排序
var groupAnagrams = function (strs) {
    var map = new Map()
    for (let str of strs) {
        var array = Array.from(str)
        array.sort()
        var key = array.toString()
        var list = map.get(key) ? map.get(key) : new Array()
        list.push(str)
        map.set(key, list)
    }
    return Array.from(map.values())
}

//计数
var groupAnagrams = function (strs) {
    var map = new Object()
    for (let str of strs) {
        var count = new Array(26).fill(0)
        for (let c of str) {
            count[c.charCodeAt() - "a".charCodeAt()]++
        }
        // console.log(count)
        map[count] ? map[count].push(str) : map[count] = [str]
    }
    return Object.values(map)
}

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))