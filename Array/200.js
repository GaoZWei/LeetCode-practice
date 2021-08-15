// 岛屿数量
// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。

//整体思路:沉岛,把遍历过的1变为0,并找他旁边的也置为0
// 思路1:
// DFS
var numIslands = function (grid) {
    var m = grid.length
    var n = grid[0].length
    var count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == '1') {
                count++
                turnToZero(i, j, grid)
            }
        }
    }
    return count
};

var turnToZero = (i, j, grid) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == "0") {
        return
    }
    if (grid[i][j] == "1") {
        grid[i][j] = 0
    }
    turnToZero(i - 1, j, grid)
    turnToZero(i + 1, j, grid)
    turnToZero(i, j - 1, grid)
    turnToZero(i, j + 1, grid)
}


// 思路2:
// BFS:队列实现
var numIslands = function (grid) {
    var count = 0
    var queue = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                count++
                grid[i][j] = '0'
                queue.push([i, j])
                turnZero(queue, grid)
            }
        }
    }
    return count
}
var turnZero = (queue, grid) => {
    var dirs = [ //四个方向
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ]
    while (queue.length) {
        var cur = queue.shift()
        for (const dir of dirs) {
            var x = cur[0] + dir[0]
            var y = cur[1] + dir[1]
            if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] != '1') {
                continue
            }
            grid[x][y] = "0"
            queue.push([x, y])
        }
    }
}

var grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
var grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(grid))