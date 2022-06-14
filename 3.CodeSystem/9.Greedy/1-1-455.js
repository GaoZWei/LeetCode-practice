// 455. 分发饼干
// 假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。
// 对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；
// 并且每块饼干 j，都有一个尺寸 s[j] 。如果 s[j] >= g[i]，我们可以将这个饼干 j 分配给孩子 i ，
// 这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。

var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    var count = 0
    var sindex = s.length - 1
    for (let i = g.length - 1; i >= 0; i--) {
        if (sindex >= 0 && s[sindex] >= g[i]) {
            count++
            sindex--
        }
    }
    return count
};
var g = [1, 2, 3],
    s = [1, 1]
var g = [1, 2],
    s = [1, 2, 3]
console.log(findContentChildren(g, s));