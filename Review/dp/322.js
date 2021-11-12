// 322. 零钱兑换
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

//背包问题
var coinChange = function (coins, amount) {
    if (!amount) return -1
    var dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount]
}
var coins = [1, 2, 5],
    amount = 11
console.log(coinChange(coins, amount))