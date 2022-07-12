// 完全背包
// 与01背包的不同: 
// 物品无限个,背包的遍历顺序从小到大
// 先物品或先背包都可以

function test_completePack1(weight, value, bagweight) {
    var n = weight.length
    var dp = new Array(bagweight + 1).fill(0)
    // 先物品,再背包
    for (let i = 0; i < n; i++) {
        for (let j = weight[i]; j <= bagweight; j++) {
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    console.log(dp);
}

function test_completePack2(weight, value, bagweight) {
    var n = weight.length
    var dp = new Array(bagweight + 1).fill(0)
    // 先背包,再物品
    for (let j = 0; j <= bagweight; j++) {
        for (let i = 0; i < n; i++) {
            if (j >= weight[i]) {
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
            }
        }
    }
    console.log(dp);
}

let weight = [1, 3, 5]
let value = [15, 20, 30]
let bagweight = 4

console.log(test_completePack1(weight, value, bagweight));
console.log(test_completePack2(weight, value, bagweight));