// 最大正方形
// 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。

// 思路:
// 动态规划 (关键是动态方程)
// 用dp数组存以这个项为右下角所形成正方形的边长
// 判断他的左,上,上对角的最小值
var maximalSquare = function (matrix) {
    var maxSideLength = 0
    var dp = new Array(matrix.length)
    for (let i = 0; i < matrix.length; i++) {
        dp[i] = new Array(matrix[i].length).fill(0)
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == "1") {
                if (i == 0 || j == 0) { //第一行,第一列
                    dp[i][j] = 1
                } else { //取左,上,上对角的最小值+1
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
            }
            maxSideLength = Math.max(maxSideLength, dp[i][j])
        }
    }
    return maxSideLength * maxSideLength
};

var matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]
var matrix = [
    ["0", "1"],
    ["1", "0"]
]
var matrix = [
    ["0"]
]
console.log(maximalSquare(matrix))