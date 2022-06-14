// 77. 组合
// 给定两个整数 n 和 k， 返回范围[1, n] 中所有可能的 k 个数的组合。

//普通回溯
var combine = function (n, k) {
    var res = []
    var dfs = (begin, tmp) => {
        if (tmp.length == k) {
            res.push(tmp.slice())
            return
        }
        for (let i = begin; i <= n; i++) {
            tmp.push(i)
            dfs(i + 1, tmp)
            tmp.pop()
        }
    }
    dfs(1, [])
    return res
}

//带剪枝
var result = []
var path = []
var combine = function (n, k) {
    result = []
    var combineHelper = (n, k, start) => {
        if (path.length == k) {
            result.push([...path])
            return
        }
        for (let i = start; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            combineHelper(n, k, i + 1)
            path.pop()
        }
    }
    combineHelper(n, k, 1)
    return result
}

var n = 4,
    k = 2
console.log(combine(n, k))