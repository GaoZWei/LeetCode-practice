// 518. 零钱兑换 II
// 给你一个整数数组 coins 表示不同面额的硬币， 另给一个整数 amount 表示总金额。
// 请你计算并返回可以凑成总金额的硬币组合数。 如果任何硬币组合都无法凑出总金额， 返回 0。

//完全背包
const change = (amount, coins) => {
    let dp = Array(amount + 1).fill(0);
    dp[0] = 1;
    //组合数
    for (let i = 0; i < coins.length; i++) {
        for (let j = coins[i]; j <= amount; j++) {
            dp[j] += dp[j - coins[i]];
        }
    }
    //排列数
    // for (let j = 0; j <= amount; j++) { // 遍历背包容量
    //     for (let i = 0; i < coins.length; i++) { // 遍历物品
    //         if (j - coins[i] >= 0) dp[j] += dp[j - coins[i]];
    //         console.log(dp);
    //     }
    // }
    return dp[amount];
}
var amount = 5,
    coins = [1, 2, 5]
console.log(change(amount, coins));