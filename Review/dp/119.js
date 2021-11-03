// 119. 杨辉三角2 (动态规划)
// 返回杨辉三角的某一行
var getRow = function (rowIndex) {
    var arr = new Array()
    arr[0] = 1
    for (let i = 1; i < rowIndex + 1; i++) {
        arr[0] = arr[i] = 1
        for (let j = i - 1; j >= 1; j--) {
            arr[j] = arr[j] + arr[j - 1]
        }
    }
    return arr
}
var rowIndex = 4
console.log(getRow(rowIndex))