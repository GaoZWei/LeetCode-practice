// 生命游戏
// 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。
// 每个细胞都具有一个初始状态：1 即为活细胞（live），或 0 即为死细胞（dead）。
// 每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
// 下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。

// 思路:
// 直接判断8个方向
var gameOfLife = function (board) {
    var m = board.length
    var n = board[0].length
    var x_direction = [-1, -1, -1, 0, 0, 1, 1, 1]
    var y_direction = [-1, 0, 1, -1, 1, -1, 0, 1]

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            var sum = 0
            for (let k = 0; k < 8; k++) {
                var x = i + x_direction[k]
                var y = j + y_direction[k]
                if (x < 0 || x > m - 1 || y < 0 || y > n - 1) continue
                if (board[x][y] == 1 || board[x][y] == -1) {
                    sum++
                }
            }
            if ((sum < 2 || sum > 3) & board[i][j] == 1) { //原始状态为1的
                board[i][j] = -1
            }
            if (sum == 3 && board[i][j] == 0) {
                board[i][j] = 2
            }
            sum = 0
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == -1) {
                board[i][j] = 0
            }
            if (board[i][j] == 2) {
                board[i][j] = 1
            }
        }
    }
    return board
};

var board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]
// var board = [[1,1],[1,0]]
console.log(gameOfLife(board))