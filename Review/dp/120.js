// 120. 三角形最小路径和 (动态规划)
// 给定一个三角形 triangle ，找出自顶向下的最小路径和。

//从下向上遍历
var minimumTotal = function (triangle) {
    var m = triangle.length
    //初始化dp
    var dp = new Array(m)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(triangle[i].length)
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (i == m - 1) {
                dp[i][j] = triangle[i][j]
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
            }
        }
    }
    return dp[0][0]
}

//降维
var minimumTotal = function (triangle) {
    var bottom = triangle[triangle.length - 1]
    //初始化dp
    var dp = new Array(triangle.length)
    for (let i = 0; i < bottom.length; i++) {
        dp[i] = bottom[i]
    }
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            // 等号右边的dp[j], dp[j + 1]是下一行的
            // 等号左边的dp[j]是当前行的
            // triangle[i][j]也是当前行的
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }
    return dp[0]
}
var triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]
console.log(minimumTotal(triangle))