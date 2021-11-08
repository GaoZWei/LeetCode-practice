// 264. 丑数 II (动态规划+三指针)
// 给你一个整数 n ，请你找出并返回第 n 个 丑数 。
// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。

//动态规划+三指针
var nthUglyNumber = function (n) {
    var dp = new Array(n + 1).fill(0)
    dp[1] = 1
    var p2 = 1,
        p3 = 1,
        p5 = 1
    for (let i = 2; i <= n; i++) {
        var num2 = dp[p2] * 2
        var num3 = dp[p3] * 3
        var num5 = dp[p5] * 5
        dp[i] = Math.min(num2, num3, num5)
        if (dp[i] == num2) p2++
        if (dp[i] == num3) p3++
        if (dp[i] == num5) p5++
    }
    return dp[n]
}

var n = 11 // 15而不是14, 14有因子7
console.log(nthUglyNumber(n))