// 397. 整数替换(动态规划+记忆化递归)
// 给定一个正整数 n， 你可以做如下操作：
// 如果 n 是偶数， 则用 n / 2 替换 n。
// 如果 n 是奇数， 则可以用 n + 1 或n - 1 替换 n。
// n 变为 1 所需的最小替换次数是多少？

//动态规划(方法对,但是超出来,会产生堆栈溢出)
var integerReplacement = function (n) {
    if (n == 1) return 0
    var dp = new Array(n + 1).fill(0)
    dp[2] = 1
    for (let i = 3; i <= n; i++) {
        if (i % 2 == 0) {
            dp[i] = dp[i / 2] + 1
        } else {
            dp[i] = Math.min(dp[(i + 1) / 2] + 1, dp[i - 1]) + 1
        }
    }
    return dp[n]
};

//记忆化递归
var map = new Map()
var integerReplacement = function (n) {
    if (n == 1) return 0
    if (!map.has(n)) {
        if (n % 2 == 0) {
            map.set(n, 1 + integerReplacement(Math.floor(n / 2)))
        } else {
            map.set(n, 2 + Math.min(integerReplacement(Math.floor(n / 2)), integerReplacement(Math.floor(n / 2) + 1))) //2代表两次操作
        }
    }
    return map.get(n)
}

var n = 7
console.log(integerReplacement(n))