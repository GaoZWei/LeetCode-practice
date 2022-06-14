// 59. 螺旋矩阵 II
// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

var generateMatrix = function (n) {
    var nums = n * n
    var matrix = new Array(n)
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(n)
    }
    var num = 1
    var left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1
    while (num <= nums) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num
            num++
        }
        top++
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num
            num++
        }
        right--
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num
            num++
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num
            num++
        }
        left++
    }
    return matrix
}
var n = 3
console.log(generateMatrix(n))