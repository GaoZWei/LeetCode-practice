// 01背包问题(一维实现)

function bagProblem(weight, value, size) {
    var n = weight.length
    var dp = new Array(size + 1).fill(0)
    for (let i = 0; i < n; i++) { //先物品,后背包
        for (let j = size; j >= weight[i]; j--) { //倒叙遍历背包,逐渐累加
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
        console.log(dp);//每一个物品过后的背包
    }
    console.log(dp);
    return dp[size]
}
var weight = [1, 3, 4, 5]
var value = [15, 20, 30, 55]
var size = 6

console.log(bagProblem(weight, value, size));