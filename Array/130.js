// 被围绕的区域
// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

// 解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 
// 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。

// 思路:
// 1.用最外层的O进入递归
// 2.递归,用'NO' 标记非岛屿
// 3.最后把NO->O,O->X
var solve = function (board) {
    var m = board.length
    if (m == 0) {
        return
    }
    var n = board[0].length
    //递归
    var dfs = (i, j) => {
        if (i < 0 || i == m || j < 0 || j == n) {
            return
        }
        if (board[i][j] == "O") {
            board[i][j] = "NO"
            dfs(i - 1, j)
            dfs(i + 1, j)
            dfs(i, j - 1)
            dfs(i, j + 1)
        }
    }

    //递归入口(最外层的O进入递归)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                if (board[i][j] == "O") {
                    dfs(i, j)
                }
            }
        }
    }

    //修改标记
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == "NO") {
                board[i][j] = "O"
            } else if (board[i][j] == "O") {
                board[i][j] = "X"
            }
        }
    }
    return board
};
var board = [
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]
]

console.log(solve(board))