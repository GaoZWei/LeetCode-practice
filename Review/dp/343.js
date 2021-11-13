// 343. 整数拆分(递归+记忆递归+动态规划)
// 给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

//递归
var integerBreak = function (n) {
    var res = 0
    for (let i = 1; i <= n - 1; i++) {
        res = Math.max(res, i * (n - i), i * integerBreak(n - i))
    }
    return res
};

//记忆化递归
var integerBreak = function (n) {
    var memory = new Array(n + 1)
    var dfs = (n) => {
        if (memory[n]) return memory[n]
        var res = 0
        for (let i = 1; i <= n - 1; i++) {
            res = Math.max(res, i * (n - i), i * dfs(n - i))
        }
        return memory[n] = res
    }
    return dfs(n)
}

//dp
var integerBreak = function (n) {
    var dp = new Array(n + 1).fill(0)
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j])
        }
    }
    return dp[n]
}

var n = 10
console.log(integerBreak(n))