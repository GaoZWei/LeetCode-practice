//有效的数独
// 请你判断一个 9x9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
// 数独部分空格内已填入了数字，空白格用 '.' 表示。

// 思路:核心就是整体9个块,按照 块 找出 小块 的的起始坐标
// way1
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let col = new Set()
        let row = new Set()
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != ".") { //判断行
                if (!row.has(board[i][j])) {
                    row.add(board[i][j])
                } else {
                    return false
                }
            }
            if (board[j][i] != ".") { //判断列
                if (!col.has(board[j][i])) {
                    col.add(board[j][i])
                } else {
                    return false
                }
            }
        }
        let block = new Set()
        let x = parseInt(i / 3) * 3 //关键是找到块的x,y坐标
        let y = i % 3 * 3
        for (let k = 0; k < 9; k++) {
            if (board[x][y] != ".") { //判断块
                if (!block.has(board[x][y])) {
                    block.add(board[x][y])
                } else {
                    return false
                }
            }
            y++
            if ((k + 1) % 3 == 0) { //第4个换行
                x += 1
                y -= 3
            }
        }
    }
    return true
};

// way2
var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let col = new Set()
        let row = new Set()
        let box = new Set()
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != ".") { //判断行
                if (!row.has(board[i][j])) {
                    row.add(board[i][j])
                } else {
                    return false
                }
            }
            if (board[j][i] != ".") { //判断列
                if (!col.has(board[j][i])) {
                    col.add(board[j][i])
                } else {
                    return false
                }
            }
            //判断块
            const boxItem = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][3 * (i % 3) + j % 3]
            if (boxItem != ".") {
                if (!box.has(boxItem)) {
                    box.add(boxItem)
                } else {
                    return false
                }
            }
        }
    }
    return true
};



//way3 核心代码
// const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3) //这是小的3*3的数独的整体index    第一行 0 1 2 第二行 3 4 5 第二行 6 7 8  
// boxes[boxIndex].includes(value)
var isValidSudoku = function (board) {
    // 初始化
    const rows = []
    const cols = []
    const boxes = []
    for (let i = 0; i < 9; i++) {
        rows[i] = []
        cols[i] = []
        boxes[i] = [] //9个大块的数组
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j]
            if (value != '.') {
                if (!rows[i].includes(value)) {
                    rows[i].push(value)
                } else {
                    return false
                }
                if (!cols[j].includes(value)) {
                    cols[j].push(value)
                } else {
                    return false
                }
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (!boxes[boxIndex].includes(value)) {
                    boxes[boxIndex].push(value)
                } else {
                    return false
                }
            }
        }
    }
    return true
}



var board = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
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
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]
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
console.log(isValidSudoku(board))