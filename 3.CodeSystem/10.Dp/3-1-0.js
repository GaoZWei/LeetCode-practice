//01背包问题 (二维实现)

function bagProblem(weight, value, size) {
    var n = weight.length
    //初始化dp
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(size + 1).fill(0)
    }
    for (let j = weight[0]; j <= size; j++) { // j从weight[0]开始
        dp[0][j] = value[0]
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= size; j++) {
            if (j < weight[i]) {
                dp[i][j] = dp[i - 1][j]
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
            }
        }
    }
    console.table(dp);
    return dp[n - 1][size]
}

var weight = [1, 3, 4, 5]
var value = [15, 20, 30, 55]
var size = 6
console.log(bagProblem(weight, value, size));