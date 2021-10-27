// 22. 括号生成(动态规划实现)
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

//递归
var generateParenthesis = function (n) {
    var res = []
    var dfs = (lRemain, rRemain, str) => {
        if (str.length == 2 * n) {
            res.push(str)
            return
        }

        if (lRemain > 0) {
            dfs(lRemain - 1, rRemain, str + "(")
        }
        if (rRemain > lRemain) {
            dfs(lRemain, rRemain - 1, str + ")")
        }
    }
    dfs(n, n, "")
    return res
}
//动态规划(lc没通过,结果正确,顺序不同而已)
var generateParenthesis = function (n) {
    //初始化
    var dp = [
        ['()']
    ]
    //遍历
    for (let i = 1; i < n; i++) {
        dp[i] = []
        // 状态转移
        var prev = dp[i - 1]
        for (let j = 0; j < prev.length; j++) {
            var v = prev[j]
            dp[i].push(...new Set([`(${v})`, `()${v}`, `${v}()`]))
        }
    }
    return dp[n - 1]
};

var n = 3
console.log(generateParenthesis(n))