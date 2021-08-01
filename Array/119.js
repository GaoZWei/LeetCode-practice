// 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
var getRow = function (rowIndex) {
    var arr = []
    for (let i = 0; i <= rowIndex; i++) {
        var tmp = []
        var sum = 0
        for (let j = 0; j <= i; j++) {
            if (!arr[i - 1]) {
                sum = 1
            } else {
                var left = arr[i - 1][j - 1] || 0
                var right = arr[i - 1][j] || 0
                sum = left + right
            }
            tmp.push(sum)
        }
        arr.push(tmp)
    }
    return arr[arr.length - 1]
};

// 思路二:
// 一维数组+从右向左遍历
var getRow = function (rowIndex) {
    var arr = new Array()
    arr[0] = 1
    for (let i = 1; i < rowIndex + 1; i++) {
        arr[0] = arr[i] = 1 //最左边和最右边为1
        for (let j = i - 1; j >= 1; j--) { //从右向左遍历,保证计算新值的时候,等号右边的都是旧值
            arr[j] = arr[j] + arr[j - 1]
        }
    }
    return arr
}
var rowIndex = 3
console.log(getRow(rowIndex))