// 279. 完全平方数
// 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

// 先物品,后背包
var numSquares = function (n) {
    var dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i * i <= n; i++) {
        for (let j = i * i; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
        }
    }
    return dp[n]
};

// 先背包,后物品
var numSquares = function (n) {
    var dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
        }
    }
    return dp[n]
};
var n = 12
console.log(numSquares(n));