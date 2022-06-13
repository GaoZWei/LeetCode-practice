// 763. 划分字母区间
// 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，
// 同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

// 在遍历的过程中相当于是要找每一个字母的边界，如果找到之前遍历过的所有字母的最远边界，说明这个边界就是分割点了

var partitionLabels = function (s) {
    var map = new Map()
    // 1.统计每一个字符最后出现的位置
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], i)
    }
    var curMax = 0
    var count = 0
    var res = []
    // 2.从头遍历字符，并更新字符的最远出现下标，如果找到字符最远出现位置下标和当前下标相等了，则找到了分割点
    for (let i = 0; i < s.length; i++) {
        count++
        curMax = Math.max(curMax, map.get(s[i]))
        if (curMax == i) {
            res.push(count)
            count = 0
        }
    }
    return res
};
var S = "ababcbacadefegdehijhklij"
console.log(partitionLabels(S));