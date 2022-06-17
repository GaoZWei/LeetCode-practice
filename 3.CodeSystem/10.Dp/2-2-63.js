// 63. 不同路径 II
// 有障碍物的m*n路径

var uniquePathsWithObstacles = function (obstacleGrid) {
    var m = obstacleGrid.length
    var n = obstacleGrid[0].length
    let dp = new Array(m)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(0)
    }
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] != 1) {
            dp[i][0] = 1
        } else {
            break
        }
    }
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] != 1) {
            dp[0][j] = 1
        } else {
            break
        }
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[i][j] = 0
            } else {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
            }
        }
    }
    return dp[m - 1][n - 1]
};

var obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]
var obstacleGrid = [
    [0, 1],
    [0, 0]
]
console.log(uniquePathsWithObstacles(obstacleGrid));