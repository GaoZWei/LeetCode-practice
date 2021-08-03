// 买卖股票的最佳时机
// 给定一个数组 prices， 它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票， 并选择在 未来的某一个不同的日子 卖出该股票。 设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。 如果你不能获取任何利润， 返回 0。

// 思路1:
//双指针
// 定一个,另一个遍历(超出时间限制)
var maxProfit = function (prices) {
    var maxprofits = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            var tmp = prices[j] - prices[i]
            maxprofits = Math.max(maxprofits, tmp)
        }
    }
    return maxprofits
};

// 思路2:
// 每一步都记录历史最低点,并计算当前减去历史最低点来判断max
var maxProfit = function (prices) {
    var minprice = prices[0]
    var max = 0
    for (let i = 0; i < prices.length; i++) {
        minprice = Math.min(minprice, prices[i]) //记录历史最低点
        max = Math.max(max, prices[i] - minprice) //计算max
    }
    return max
}

var prices = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices))