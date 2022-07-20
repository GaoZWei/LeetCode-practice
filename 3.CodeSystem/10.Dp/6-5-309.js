// 309. 最佳买卖股票时机含冷冻期
// 卖出股票后，你无法在第二天买入股票 (即冷冻期为 1 天),计算出最大利润

// 0:买入状态  1:卖出状态  2:今天卖出  3:今天冷冻期
var maxProfit = function (prices) {
    var n = prices.length
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(4).fill(0)
    }
    dp[0][0] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], Math.max(dp[i - 1][1] - prices[i], dp[i - 1][3] - prices[i]))
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3])
        dp[i][2] = dp[i - 1][0] + prices[i]
        dp[i][3] = dp[i - 1][2]
    }
    return Math.max(dp[n - 1][1], dp[n - 1][2], dp[n - 1][3])
};

var prices = [1, 2, 3, 0, 2]
// var prices = [1]
console.log(maxProfit(prices));