// 419. 甲板上的战舰
// 给定一个二维的甲板， 请计算其中有多少艘战舰。 战舰用 'X'表示，空位用 '.'表示。 你需要遵守以下规则：

// 给你一个有效的甲板，仅由战舰或者空位组成。
// 战舰只能水平或者垂直放置。换句话说,战舰只能由 1xN (1 行, N 列)组成，或者 Nx1 (N 行, 1 列)组成，其中N可以是任意大小。
// 两艘战舰之间至少有一个水平或垂直的空位分隔 - 即没有相邻的战舰。

// 思路:
// 遍历整个数组,若x的上方和左方都不是X,则结果加1
var countBattleships = function (board) {
    var res = 0
    var m = board.length
    var n = board[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == "X") {
                if ((i <= 0 || board[i - 1][j] != "X") && (j <= 0 || board[i][j - 1] != "X")) {
                    res++
                }
            }
        }
    }
    return res
};
//思路2:
// 把x和相邻的变成. (两个while)
// 每找到一个 X（战舰）进行计数，并将其相邻的 X 改为 . 。
var countBattleships = function (board) {
    var res = 0
    var m = board.length
    var n = board[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == "X") {
                res++
                board[i][j] = "."
                var a = i + 1
                var b = j
                //遍历行
                while (a < m && board[a][b] == "X") {
                    board[a][b] = "."
                    a++
                }
                a = i
                b = j + 1
                //遍历列
                while (b < n && board[a][b] == "X") {
                    board[a][b] = "."
                    b++
                }
            }
        }
    }
    return res
}
var board = [
    ["X", ".", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "X"]
]
// var board = [
//     ["X", ".", ".", "X"],
//     [".", ".", ".", "X"],
//     [".", ".", ".", "X"]
// ]
console.log(countBattleships(board))