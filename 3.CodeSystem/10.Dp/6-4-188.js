// 188. 买卖股票的最佳时机 IV
// k笔交易,计算最大利润

// 奇数买入状态, 偶数卖出状态
var maxProfit = function (k, prices) {
    if (prices == null || prices.length < 2 || k == 0) {
        return 0;
    }
    var n = prices.length
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(2 * k + 1).fill(0)
    }
    //初始化
    for (let j = 0; j < 2 * k + 1; j++) {
        if (j % 2 != 0) {
            dp[0][j] = -prices[0]
        }
    }
    //状态转移
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < 2 * k; j += 2) {
            dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i])
            dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i])
        }
    }
    return dp[n - 1][2 * k]
};

var k = 2,
    prices = [3, 2, 6, 5, 0, 3]
console.log(maxProfit(k, prices));