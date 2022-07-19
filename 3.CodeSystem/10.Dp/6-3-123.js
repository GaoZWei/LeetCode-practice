// 123. 买卖股票的最佳时机 III
// 计算你所能获取的最大利润。你最多可以完成 两笔 交易。

//5个状态
//0:未操作 1:第一次买入 2:第一次卖出 3:第二次买入 4:第二次卖出
var maxProfit = function (prices) {
    var n = prices.length
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(5).fill(0)
    }
    dp[0][1] = -prices[0]
    dp[0][3] = -prices[0]
    for (let i = 1; i < n; i++) {
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i])
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i])
    }
    return dp[n - 1][4]
};

var prices = [3, 3, 5, 0, 0, 3, 1, 4]
console.log(maxProfit(prices));