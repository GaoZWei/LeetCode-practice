//最小路径和
// 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
// 说明：每次只能向下或者向右移动一步。

// 思路:
// 找MIN{当前的左边+当前的值,当前的上边+当前的值最小的}
// 不需要重新创建数组!!!
var minPathSum = function (grid) {
    var m = grid.length
    var n = grid[0].length
    // var dp = new Array(m)
    // for (let i = 0; i < m; i++) {
    //     dp[i] = new Array(n)
    // }
    // dp[0][0] = grid[0][0]

    for (let i = 1; i < m; i++) { // 处理第一列
        grid[i][0] += grid[i - 1][0]
    }

    for (let i = 1; i < n; i++) { // 处理第一行
        grid[0][i] += grid[0][i - 1]
    }

    // 处理下面的
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            grid[i][j] = Math.min(grid[i][j] + grid[i - 1][j], grid[i][j] + grid[i][j - 1])
        }
    }
    return grid[m - 1][n - 1]
}

var grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
var grid = [
    [1, 2, 3],
    [4, 5, 6]
]
console.log(minPathSum(grid))