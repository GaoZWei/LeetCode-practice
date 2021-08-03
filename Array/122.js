// 买卖股票的最佳时机 II

// 给定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 思路:
// 只需要计算每天的差价是否为正,为正就加入,即可得到最大利润
var maxProfit = function (prices) {
    var max = 0
    for (let i = 1; i < prices.length; i++) {
        max += Math.max(0, prices[i] - prices[i - 1])
    }
    return max
};

var prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))