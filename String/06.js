// 6. Z 字形变换
// 将一个给定字符串 s 根据给定的行数 numRows， 以从上往下、 从左到右进行 Z 字形排列。

var convert = function (s, numRows) {
    if (numRows == 1) return s
    var len = Math.min(s.length, numRows)
    var rows = [];
    //初始化
    for (let i = 0; i < len; i++) {
        rows[i] = ''
    }
    var loc = 0 //当前字符串数组的下标
    var down = false //判断是否向下
    //核心
    for (let i = 0; i < s.length; i++) {
        rows[loc] += s[i]
        if (loc == 0 || loc == numRows - 1) {
            down = !down
        }
        loc += down ? 1 : -1
    }

    var res = ''
    //连接
    for (let row of rows) {
        res += row
    }
    return res
};

var s = "PAYPALISHIRING",
    numRows = 3
console.log(convert(s, numRows))