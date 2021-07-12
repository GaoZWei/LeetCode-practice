//螺旋矩阵
// 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]


// 思路1: 不遍历到底
// top < bottom && left < right
// 每完成一圈,就把圈收缩
// 当剩一行或剩一列,单独判断
var spiralOrder = function (matrix) {
    var res = []
    var top = 0;
    var bottom = matrix.length - 1
    var left = 0;
    var right = matrix[0].length - 1 //注意不是方阵
    while (top < bottom && left < right) { //按圈遍历
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
        left++
        top++
        right--
        bottom--
    }
    if (top == bottom) { //剩一行,从左向右遍历
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
    } else if (left == right) { //剩一列,从上向下遍历
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
    }
    return res
};



//思路2:遍历到底
// top <= bottom && left <= right
// 额外注意:遍历完成要么发生在遍历完“上边”，要么发生在遍历完“右边” ,在这两步完成之后,进行判断即可
var spiralOrder = function (matrix) {
    var res = []
    var top = 0;
    var bottom = matrix.length - 1
    var left = 0;
    var right = matrix[0].length - 1
    while (top <= bottom && left <= right) { //按圈遍历,遍历到底
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
};
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
var matrix = [
    [1]
]
console.log(spiralOrder(matrix))