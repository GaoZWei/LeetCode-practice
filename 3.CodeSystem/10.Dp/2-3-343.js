// 343. 整数拆分
// 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。

var integerBreak = function (n) {
    var dp = new Array(n + 1).fill(0)
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i - 1; j++) {
            dp[i] = Math.max(dp[i], Math.max((i - j) * j), dp[i - j] * j)
        }
    }
    return dp[n]
};

var n = 10
console.log(integerBreak(n));