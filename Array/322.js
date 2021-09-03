// 零钱兑换
// 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
// 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
// 你可以认为每种硬币的数量是无限的。

// 动态规划
const coinChange = (coins, amount) => {
    if (!amount) return 0
    var dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1)  //关键
        }
    }
    return dp[amount] == Infinity ? -1 : dp[amount]
}
var coins = [1, 2, 5],
    amount = 11
console.log(coinChange(coins, amount))