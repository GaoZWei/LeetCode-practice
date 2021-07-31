//杨辉三角
//给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

//直接搞
var generate = function (numRows) {
    var arr = []
    for (let i = 0; i < numRows; i++) {
        var sum = 0
        var tmp = []
        for (let j = 0; j <= i; j++) {
            if (!arr[i - 1]) { //如果是第一行
                sum = 1
            } else {
                left = arr[i - 1][j - 1] || 0
                right = arr[i - 1][j] || 0
                // console.log(left, right)
                sum = left + right
            }
            tmp.push(sum)
        }
        arr.push(tmp)
    }
    return arr
};

var numRows = 5
console.log(generate(numRows))