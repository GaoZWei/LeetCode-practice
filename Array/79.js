//单词搜索
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word。 如果 word 存在于网格中， 返回 true；
// 否则， 返回 false。

// 单词必须按照字母顺序， 通过相邻的单元格内的字母构成， 其中“ 相邻” 单元格是那些水平相邻或垂直相邻的单元格。
// 同一个单元格内的字母不允许被重复使用。。
// 输入： board = [
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"]
// ], word = "ABCCED"
// 输出： true


//思路:
// 用一个数组记录是否用过used
// 递归入口

// 递归出口
// 不满足的点
// 向四个方向递归

var exist = function (board, word) {
    var m = board.length
    var n = board[0].length
    var used = new Array(m) // 用一个数组记录是否用过used
    for (let i = 0; i < m; i++) {
        used[i] = new Array(n)
    }
    const search = (row, col, i) => {
        if (i == word.length) { //递归出口
            return true
        }
        //不满足的点
        if (row < 0 || row >= m || col < 0 || col >= n) { //越界
            return false
        }
        if (used[row][col] || board[row][col] != word[i]) { //已经使用过 或者 不是目标点
            return false
        }
        used[row][col] = true //记录这一点被访问了
        //向四个方向递归
        var canFind = search(row + 1, col, i + 1) || search(row, col + 1, i + 1) || search(row - 1, col, i + 1) || search(row, col - 1, i + 1)
        if (canFind) {
            return true
        }
        used[row][col] = false //不能为剩下字符找到路径,返回false,撤销当前点的状态
        return false
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0] && search(i, j, 0)) { //递归入口
                return true
            }
        }
    }
    return false
};
var board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ],
    word = "ABCCED"
var board = [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"]
    ],
    word = "ABCB"
console.log(exist(board, word))