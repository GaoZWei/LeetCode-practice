// 455. 分发饼干
// 给孩子们一些小饼干。每个孩子最多只能给一块饼干。
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，
// 都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，这个孩子会得到满足。
// 你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

//双排序＋依次比较
var findContentChildren = function (g, s) { //g胃口值,s饼干尺寸
    s.sort((a, b) => b - a)
    g.sort((a, b) => b - a)
    var res = 0
    var slen = s.length
    var glen = g.length
    var i = 0;
    var j = 0
    while (i < slen && j < glen) {
        if (s[i] >= g[j]) {
            res++
            i++
            j++
        } else {
            j++
        }
    }
    return res
};
var g = [1, 2],
    s = [1, 2, 3]
console.log(findContentChildren(g, s))