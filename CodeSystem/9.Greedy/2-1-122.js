// 122. 买卖股票的最佳时机 II
// 给定一个数组 prices ，其中 prices[i] 表示股票第 i 天的价格。
// 在每一天，你可能会决定购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以购买它，然后在 同一天 出售。
// 返回 你能获得的 最大 利润 。

// 计算每天的利润(只计算每天的正利润)
var maxProfit = function (prices) {
    var profit = 0
    if (prices.length < 1) {
        return 0
    }
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += (prices[i] - prices[i - 1])
        }
    }
    return profit
};

//dp
// dp[i][0] i天买了股票
// dp[i][1] i天没买股票
var maxProfit = function (prices) {
    var n = prices.length
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(0)
    }
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    return dp[n - 1][1]
}
var prices = [1, 2, 3, 4, 5]
var prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));