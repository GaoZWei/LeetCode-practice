// 216. 组合总和3
// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

var combinationSum3 = function (k, n) {
    var res = []
    var dfs = (start, sum, tmp) => {
        if (tmp.length == k && sum == n) {
            res.push(tmp.slice())
            return
        }
        for (let i = start; i <= 9; i++) {
            tmp.push(i)
            dfs(i + 1, sum + i, tmp)
            tmp.pop()
        }
    }
    dfs(1, 0, [])
    return res
};

var k = 3,
    n = 7
var k = 3,
    n = 9
console.log(combinationSum3(k, n))