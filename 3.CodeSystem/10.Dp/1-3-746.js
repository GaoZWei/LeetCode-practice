// 746. 使用最小花费爬楼梯
// 给你一个整数数组 cost ，其中 cost[i] 是从楼梯第 i 个台阶向上爬需要支付的费用。
// 一旦你支付此费用，即可选择向上爬一个或者两个台阶。
// 你可以选择从下标为 0 或下标为 1 的台阶开始爬楼梯。
// 请你计算并返回达到楼梯顶部的最低花费。

var minCostClimbingStairs = function (cost) {
    var n = cost.length
    var dp = new Array(n)
    dp[0] = cost[0]
    dp[1] = cost[1]
    for (let i = 2; i < n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i], dp[i - 2] + cost[i])
    }
    console.log(dp);
    return Math.min(dp[n - 2], dp[n - 1])
};
var cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
console.log(minCostClimbingStairs(cost));