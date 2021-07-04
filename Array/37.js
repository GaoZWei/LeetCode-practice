//解数独
// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。

//递归
//1.创建判断要填入的点是否有冲突的函数
// 2.枚举每一个点，如果有冲突，下一个点，如果没有冲突，填入，并进入下一层递归
var solveSudoku = function (board) {
    //判断是否冲突
    const hasConflict = (r, c, val) => {
        for (let i = 0; i < 9; i++) {
            if (board[i][c] == val || board[r][i] == val) {
                return true
            }
        }
        var subRowStart = Math.floor(r / 3) * 3 //该点对应小框中行的起始索引
        var subColStart = Math.floor(c / 3) * 3 //该点对应小框中列的起始索引
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[subRowStart + i][subColStart + j] == val) { //判断它所在小框是否重复
                    return true
                }
            }
        }
        return false
    }
    //递归函数
    const fill = (i, j) => {
        if (j == 9) { //换行
            i++
            j = 0;
            if (i == 9) {
                return true
            }
        }
        if (board[i][j] != '.') { //如果不为空,执行下一个
            return fill(i, j + 1)
        }
        for (let num = 1; num <= 9; num++) { //开始填入数字
            if (hasConflict(i, j, String(num))) { //冲突
                continue
            }
            board[i][j] = String(num) //如果不冲突,填入该数字
            if (fill(i, j + 1)) {
                return true
            }
            board[i][j] = "." //否则清空
        }
        return false
    }
    fill(0, 0)
    return board
}


//优化后的代码,删除搞(空间换时间)
//1.初始化数组，并将数组填满
// 2.将已经有的数进行删除操作
// 3.递归判断，如果三个数组中（存在）没有的，则冲突，如果三个数组中都有，在这三个数组中删除，并进行下一次递归判断
var solveSudoku = function (board) {
    const rows = new Array(9)
    const cols = new Array(9)
    const blocks = new Array(9)
    const opitons = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (let i = 0; i < 9; i++) { //初始化
        rows[i] = new Set(opitons)
        cols[i] = new Set(opitons)
        blocks[i] = new Set(opitons)
    }

    const getBlockIndex = (i, j) => { //获取坐标所在框的索引
        return parseInt(i / 3) * 3 + parseInt(j / 3)
        // return (i / 3 | 0) * 3 + (j / 3 | 0)gi
    }

    for (let i = 0; i < 9; i++) { //更新set,删除该选项
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != ".") {
                rows[i].delete(board[i][j])
                cols[j].delete(board[i][j])
                blocks[getBlockIndex(i, j)].delete(board[i][j])
            }
        }
    }
    //递归
    const fill = (i, j) => {
        if (j == 9) { //换行
            i++
            j = 0
            if (i == 9) {
                return true
            }
        }
        if (board[i][j] != '.') {
            return fill(i, j + 1)
        }
        const blockIndex = getBlockIndex(i, j)

        for (let num = 1; num <= 9; num++) {
            const s = String(num)
            if (!rows[i].has(s) || !cols[j].has(s) || !blocks[blockIndex].has(s)) { //如果数组中没有,continue
                continue
            }
            board[i][j] = s
            rows[i].delete(board[i][j])
            cols[j].delete(board[i][j])
            blocks[blockIndex].delete(board[i][j])

            if (fill(i, j + 1)) {
                return true
            }
            board[i][j] = "."
            rows[i].add(s)
            cols[j].add(s)
            blocks[blockIndex].add(s)
        }
        return false
    }
    fill(0, 0)
    return board
}

var board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
var board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(solveSudoku(board))