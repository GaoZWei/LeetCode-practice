//旋转图像
// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
// 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[[7,4,1],[8,5,2],[9,6,3]]

//思路1:根据带辅助数组的结果,经过四次旋转!!!,就可以回到原处
// 核心公式 :  m[col][n - 1 - row] = m[row][col]
// n为偶数, 枚举(n平方 / 4)个位置 = (n / 2) * (n / 2)
// n为奇数, 枚举((n平方-1) / 4)个位置 = (n+1 / 2) * (n-1 / 2)
var rotate = function (matrix) {
    var n = matrix.length
    for (let row = 0; row < Math.floor(n / 2); row++) {
        for (let col = 0; col < Math.floor((n + 1) / 2); col++) {
            const tmp = matrix[row][col]
            matrix[row][col] = matrix[n - 1 - col][row]
            matrix[n - 1 - col][row] = matrix[n - 1 - row][n - 1 - col]
            matrix[n - 1 - row][n - 1 - col] = matrix[col][n - 1 - row]
            matrix[col][n - 1 - row] = tmp
        }
    }
    return matrix
};

// 思路2:
// 先水平翻转,m[row][col]=[n-1-row][col],n/2次枚举
//再对角线翻转 m[row][col]=m[col][row] ,只需枚举对角线左侧即可
var rotate = function (matrix) {
    var n = matrix.length
    for (let row = 0; row < n / 2; row++) {
        for (let col = 0; col < n; col++) {
            [matrix[row][col], matrix[n - 1 - row][col]] = [matrix[n - 1 - row][col], matrix[row][col]]
        }
    }
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < row; col++) {
            [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
        }
    }
    return matrix
}


var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(rotate(matrix))