// 不同路径 II
// 一个机器人位于一个 m x n 网格的左上角（ 起始点在下图中标记为“ Start”）。
// 机器人每次只能向下或者向右移动一步。 机器人试图达到网格的右下角（ 在下图中标记为“ Finish”）。
// 现在考虑网格中有障碍物。 那么从左上角到右下角将会有多少条不同的路径？


// 思路: 
// 1.只能从左边或者上面到达目的地
// 到达它的路径数 = 左边的路径数 + 上边的路径数
// 2.障碍,当遇到障碍时候,将其的路径数设置为0

var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] == 1) {
        return 0
    }
    var m = obstacleGrid.length
    var n = obstacleGrid[0].length
    //初始化数组
    var dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n)
    }
    //判断障碍
    dp[0][0] = 1 //开始点设置为1
    //判断第一列
    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] == 1 || dp[i - 1][0] == 0 ? 0 : 1 //这个位置是否是障碍/这个位置的前一个路径数是否是0
    }

    // 判断第一行
    for (let i = 1; i < n; i++) {
        dp[0][i] = obstacleGrid[0][i] == 1 || dp[0][i - 1] == 0 ? 0 : 1
    }

    //遍历,看有多少路径
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] == 1 ? 0 : dp[i - 1][j] + dp[i][j - 1] //到达它的路径数 = 左边的路径数 + 上边的路径数
        }
    }
    return dp[m - 1][n - 1] //到达m-1 n-1的路径数
};

var obstacleGrid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
]
var obstacleGrid = [
    [1]
]
console.log(uniquePathsWithObstacles(obstacleGrid))