// 279. 完全平方数  (动态规划(背包问题))
// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。
// 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

//动态规划(背包问题)
var numSquares = function (n) {
    var dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= n; i++) { //先背包
        for (let j = 1; j * j <= i; j++) { //后物品
            dp[i] = Math.min(dp[i - j * j] + 1, dp[i])
        }
    }
    return dp[n]
};


var numSquares = function (n) {
    var dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= n; i++) { //先物品
        var val = i * i
        for (let j = val; j <= n; j++) { //后背包
            dp[j] = Math.min(dp[j - val] + 1, dp[j])
        }
    }
    return dp[n]
};
var n = 13
console.log(numSquares(n))