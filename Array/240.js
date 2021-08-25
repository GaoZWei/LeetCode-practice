// 搜索二维矩阵 II
// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

// 思路:
// 动态规划 (不可行)
var searchMatrix = function (matrix, target) {
    var dp = new Array()
    for (let i = 0; i < matrix.length; i++) {
        dp[i] = new Array().fill(0)
    }
    var dfs = (matrix, target, i, j) => {
        if (dp[i][j] == 1) {
            return
        }
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                dp[i][j] = 1
                if (matrix[i][j] == target) {
                    return true
                } else if (matrix[i][j] < target) {
                    // dp[i + 1][j] = 1
                    dfs(matrix, target, i + 1, j)
                    // dp[i][j + 1] = 1
                    dfs(matrix, target, i, j + 1)
                } else if (matrix[i][j] > target) {
                    // dp[i - 1][j] = 1
                    dfs(matrix, target, i - 1, j)
                    // dp[i][j - 1] = 1
                    dfs(matrix, target, i, j - 1)
                }
            }
        }
    }
    dfs(matrix, target, 0, 0)
    return false
};

// 思路2:
// 从右上往左下遍历(右上角)    对应的另一种方法是从(左下角)开始
var searchMatrix = function (matrix, target) {
    var m = matrix.length
    var n = matrix[0].length
    var right = n - 1
    var up = 0
    while (right >= 0 && up < m) {
        if (matrix[up][right] > target) {
            right--
        } else if (matrix[up][right] < target) {
            up++
        } else {
            return true
        }
    }
    return false
}
var matrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ],
    target = 5

var matrix = [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ],
    target = 20
console.log(searchMatrix(matrix, target))