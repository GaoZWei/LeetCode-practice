// 714.买卖股票的最佳时机含手续费
// 多次交易,含手续费

var maxProfit = function (prices, fee) {
    var n = prices.length
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(2).fill(0)
    }
    dp[0][0] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee) //这里处理手续费即可,其他同122
    }
    return dp[n - 1][1]
};
var prices = [1, 3, 2, 8, 4, 9],
    fee = 2
prices = [1, 3, 7, 5, 10, 3], fee = 3
console.log(maxProfit(prices, fee));