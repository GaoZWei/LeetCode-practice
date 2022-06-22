// 1049. 最后一块石头的重量 II
// 有一堆石头，用整数数组 stones 表示。其中 stones[i] 表示第 i 块石头的重量。
// 每一回合，从中选出任意两块石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
// 如果 x == y，那么两块石头都会被完全粉碎；
// 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
// 最后，最多只会剩下一块 石头。返回此石头 最小的可能重量 。如果没有石头剩下，就返回 0。

// 01背包,核心是sum/2可装的最多容量的石头
var lastStoneWeightII = function (stones) {
    var n = stones.length
    var sum = stones.reduce((a, b) => a + b)
    var target = parseInt(sum / 2)
    var dp = new Array(target + 1).fill(0)
    for (let i = 0; i < n; i++) {
        for (let j = target; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
        }
    }
    return sum - dp[target] - dp[target] //多的减去少的
};
var stones = [2, 7, 4, 1, 8, 1]
var stones = [31, 26, 33, 21, 40]
console.log(lastStoneWeightII(stones));