// 122. 买卖股票的最佳时机 II
// 买卖多次,求最大利润

//dp
var maxProfit = function (prices) {
    var n = prices.length
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(2).fill(0)
    }
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    return dp[n - 1][1]
};

var prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices));