// 54. 螺旋矩阵
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。

//遍历到底
var spiralOrder = function (matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var res = []

    var left = 0,
        right = n - 1,
        top = 0,
        bottom = m - 1
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        top++
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        right--
        if (top > bottom || left > right) { //遍历完成要么发生在遍历完“上边”，要么发生在遍历完“右边” ,在这两步完成之后,进行判断即可
            break
        }
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i])
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        left++
    }
    return res
}


// 不遍历到底
var spiralOrder = function (matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var res = []
    var left = 0,
        right = n - 1,
        top = 0,
        bottom = m - 1
    while (left < right && top < bottom) {
        for (let i = left; i < right; i++) {
            res.push(matrix[top][i])
        }
        for (let i = top; i < bottom; i++) {
            res.push(matrix[i][right])
        }
        for (let i = right; i > left; i--) {
            res.push(matrix[bottom][i])
        }
        for (let i = bottom; i > top; i--) {
            res.push(matrix[i][left])
        }
        top++
        right--
        bottom--
        left++
    }
    if (top == bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
    } else if (left == right) {
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][left])
        }
    }
    return res
}

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
console.log(spiralOrder(matrix))