// 矩阵置0
// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

// 思路一:
// 采用两个数组进行标记
// 两次遍历, 第一次遍历遇到0, 将其置为true
var setZeroes = function (matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var row = new Array(m).fill(false)
    var col = new Array(n).fill(false)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) { //当该坐标值为0的时候，将辅助数组置为true
                row[i] = true
                col[j] = true
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix
};

// 思路二:
// 1.预处理两个标记变量
// 2.用其他行和列去处理第一行和第一列
// 3.反过来使用第一行和第一列去更新其他行和列
// 4.使用标记变量更新第一行和第一列
var setZeroes = function (matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var rowZero = false;
    var colZero = false;
    //1.预处理
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] == 0) {
            colZero = true
        }
    }
    for (let i = 0; i < n; i++) {
        if (matrix[0][i] == 0) {
            rowZero = true
        }
    }
    // 2.用其他行和列去处理第一行和第一列
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    //3.反过来使用第一行和第一列去更新其他行和列
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }
    }
    //4.使用标记变量更新第一行和第一列
    for (let i = 0; i < m; i++) {
        if (colZero) {
            matrix[i][0] = 0
        }
    }
    for (let i = 0; i < n; i++) {
        if (rowZero) {
            matrix[0][i] = 0
        }
    }
    return matrix
}


// 思路三:
// 预处理一个标记变量
// 从下往上遍历
var setZeroes = function (matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var colZero = false; //标记第一列
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] == 0) {
            colZero = true
        }
        for (let j = 1; j < n; j++) {//也是把第一行和第一列对应的置为零
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    // 从下往上遍历,防止提前更新
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0
            }
        }
        if (colZero) {
            matrix[i][0] = 0
        }
    }
    return matrix
}
var matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]
var matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]
console.log(setZeroes(matrix))