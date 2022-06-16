// 70. 爬楼梯

var climbStairs = function (n) {
    var dp = new Array(n)
    dp[0] = 0
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
};
var n = 5
console.log(climbStairs(n));