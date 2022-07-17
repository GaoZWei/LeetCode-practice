// 121. 买卖股票的最佳时机
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

//贪心
var maxProfit = function (prices) {
    var min = prices[0]
    var Profit = 0
    for (let i = 1; i < prices.length; i++) {
        if (min > prices[i]) min = prices[i]
        Profit = Math.max(Profit, prices[i] - min)
    }
    return Profit
};

//dp
var maxProfit = function (prices) {
    var n = prices.length
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(2).fill(0) //2维
    }

    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i])
    }
    return dp[n - 1][1]
}

var prices = [7, 1, 5, 3, 6, 4]
// var prices = [7, 6, 4, 3, 1]
console.log(maxProfit(prices));