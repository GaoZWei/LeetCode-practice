// 463. 岛屿的周长
// 给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
// 网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。

//总周长=land * 4 - 2 * border
var islandPerimeter = (grid) => {
    var land = 0 //土地的个数
    var border = 0 // 接壤边的个数
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                land++
                if (i < grid.length - 1 && grid[i + 1][j] == '1') {
                    border++
                }
                if (j < grid[0].length - 1 && grid[i][j + 1] == '1') {
                    border++
                }
            }
        }
    }
    return land * 4 - 2 * border
}

//深度优先,碰到岛屿找四周的,找不到就是边界,遍历过就置为2,区别1和0
var islandPerimeter = (grid) => {
    var m = grid.length
    var n = grid[0].length
    var res = 0
    const dfs = (i, j) => {
        if (i >= m || j >= n || i < 0 || j < 0) { //到达边界
            return 1
        }
        if (grid[i][j] == 0) { //周围是海
            return 1
        }
        if (grid[i][j] == 2) { //已经遍历过
            return 0
        }
        grid[i][j] = 2
        return dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1) //4个方向
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                return dfs(i, j)
            }
        }
    }
    return 0
}
var grid = [
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]
console.log(islandPerimeter(grid))