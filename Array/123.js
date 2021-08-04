// 买卖股票的最佳时机 III
// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 两笔交易
// 思路:
// max{当前无操作(取前一天的利润),当前操作(计算与前面的几天的利润+选中对应的前面的利润)}
var maxProfit = function (prices) {
    var len = prices.length
    if (len == 0) {
        return 0
    }
    // 初始化数组
    var dp = new Array(3)
    for (let i = 0; i < 3; i++) {
        dp[i] = new Array(len)
    }
    //第一行,第一列为0
    for (let i = 0; i < 3; i++) {
        dp[i][0] = 0
    }
    for (let j = 0; j < len; j++) {
        dp[0][j] = 0
    }
    // 填剩下的数
    for (let i = 1; i < 3; i++) {
        var maxprofit = 0 - prices[0]; //dp[i - 1][j] - prices[j] 第一列为0
        for (let j = 1; j < len; j++) {
            dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxprofit)
            maxprofit = Math.max(maxprofit, dp[i - 1][j] - prices[j])
        }
    }
    return dp[2][len - 1]
};

var prices = [3, 3, 5, 0, 0, 3, 1, 4]
console.log(maxProfit(prices))