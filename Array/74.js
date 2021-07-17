//搜索二维矩阵
// 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：
// 每行中的整数从左到右按升序排列。
// 每行的第一个整数大于前一行的最后一个整数。
// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true

// 思路1:
// 1.先找行,再找行里的元素
// 2.核心是:从每一行的最后一个进行遍历
var searchMatrix = function (matrix, target) {
    var m = matrix.length
    var n = matrix[0].length
    var i = 0;
    var j = n - 1 //从每一行的最后遍历
    while (i < m && j >= 0) {
        if (matrix[i][j] == target) {
            return true
        }
        if (matrix[i][j] < target) {
            i++
        } else {
            j--
        }
    }
    return false
};

//思路2:
// 找到行,二分查找(超出时间限制)
var searchMatrix = function (matrix, target) {
    var m = matrix.length
    var n = matrix[0].length
    var i = 0
    while (i < m) {
        if (matrix[i][n - 1] == target) {
            return true
        }
        if (matrix[i][n - 1] < target) {
            i++
        } else {
            var left = 0;
            var right = n - 1
            var mid = 0;
            while (left <= right) {
                mid = parseInt((left + right) / 2)
                if (matrix[i][mid] == target) {
                    return true
                } else if (matrix[i][mid] > target) {
                    right = mid - 1
                } else if (matrix[i][mid] < target) {
                    left = mid + 1
                }
            }
        }
    }
    return false
}

// 思路3:
// 直接拍平+二分
var searchMatrix = function (matrix, target) {
    var m = matrix.length
    var n = matrix[0].length
    var arr = matrix.flat() //直接拍平
    var left = 0;
    var right = m * n - 1
    var mid = 0;
    while (left <= right) {
        mid = parseInt((left + right) / 2)
        if (arr[mid] == target) {
            return true
        } else if (arr[mid] > target) {
            right = mid - 1
        } else if (arr[mid] < target) {
            left = mid + 1
        }
    }
    return false
}

// 思路4:
// 拍平+比较值
var searchMatrix = function (matrix, target) {
    var m = matrix.length
    var n = matrix[0].length
    var left = 0;
    var right = m * n - 1
    while (left <= right) {
        var mid = parseInt((left + right) / 2)
        var val = matrix[Math.floor(mid / n)][mid % n] //找对应的val
        if (val == target) {
            return true
        } else if (val > target) {
            right = mid - 1
        } else if (val < target) {
            left = mid + 1
        }
    }
    return false
}
var matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
]

var matrix = [
    [1, 1]
]
var target = 1
console.log(searchMatrix(matrix, target))