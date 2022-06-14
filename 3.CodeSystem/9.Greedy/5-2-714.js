// 714. 买卖股票的最佳时机含手续费

// 给定一个整数数组 prices，其中 prices[i]表示第 i 天的股票价格 ；整数 fee 代表了交易股票的手续费用。
// 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果你已经购买了一个股票，在卖出它之前你就不能再继续购买股票了。
// 返回获得利润的最大值。

var maxProfit = function (prices, fee) {
    var result = 0
    var minPrice = prices[0]
    for (let i = 0; i < prices.length; i++) {
        //case 2: 相当于买入
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        // case 3:保持原有状态（因为此时买则不便宜，卖则亏本）
        if (prices[i] >= minPrice && prices[i] - minPrice - fee <= 0) {
            continue
        }
        // case 1: 计算利润，可能有多次计算利润，最后一次计算利润才是真正意义的卖出
        if (prices[i] - minPrice - fee > 0) {
            result += prices[i] - minPrice - fee
            minPrice = prices[i] - fee
        }
    }
    return result
};

var prices = [1, 3, 2, 8, 4, 9],
    fee = 2
console.log(maxProfit(prices, fee));