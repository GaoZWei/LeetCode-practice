// 有序矩阵中第 K 小的元素
// 给你一个 n x n 矩阵 matrix ，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
// 请注意，它是 排序后 的第 k 小元素，而不是第 k 个 不同 的元素。

// 输入：matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// 输出：13

// 值域二分查找

var countfun = (matrix, midVal) => { //累计比mid小的数的个数
    var n = matrix.length
    var count = 0
    var row = 0
    var col = n - 1
    while (row < n && col >= 0) {
        if (matrix[row][col] <= midVal) {
            count += (col + 1) //累加一整行
            row++
        } else {
            col--
        }
    }
    return count
}

var kthSmallest = function (matrix, k) {
    var n = matrix.length
    var begin = matrix[0][0]
    var end = matrix[n - 1][n - 1]
    while (begin <= end) { //值域二分查找
        var midVal = Math.floor((begin + end) / 2)
        var count = countfun(matrix, midVal)
        if (count < k) {
            begin = midVal + 1
        } else {
            end = midVal - 1
        }
    }
    return begin
};




var matrix = [
        [1, 5, 9],
        [10, 11, 13],
        [12, 13, 15]
    ],
    k = 8
console.log(kthSmallest(matrix, k))