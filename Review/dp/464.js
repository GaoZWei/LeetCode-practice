// 464. 我能赢吗(递归)
// 给定一个整数 maxChoosableInteger （整数池中可选择的最大数）和另一个整数 desiredTotal（累计和），判断先出手的玩家是否能稳赢（假设两位玩家游戏时都表现最佳）？

//递归
var dfs = (maxChoosableInteger, desiredTotal, visited, map) => {
    var state = visited.toString()
    if (map.has(state)) return map.get(state)

    for (let i = 1; i <= maxChoosableInteger; i++) {
        if (!visited[i]) {
            if (desiredTotal - i <= 0) {
                map.set(state, true)
                return true
            }
            visited[i] = 1
            var result = dfs(maxChoosableInteger, desiredTotal - i, visited, map)
            visited[i] = 0
            if (result == false) {
                map.set(state, true)
                return true
            }
        }
    }
    map.set(state, false)
    return false
}


var canIWin = function (maxChoosableInteger, desiredTotal) {
    if (maxChoosableInteger >= desiredTotal) return true
    var sum = maxChoosableInteger * (maxChoosableInteger + 1) / 2
    if (sum < desiredTotal) return false
    var map = new Map()
    var visited = new Array(maxChoosableInteger + 1).fill(0)
    return dfs(maxChoosableInteger, desiredTotal, visited, map)
};



var maxChoosableInteger = 4
var desiredTotal = 6

console.log(canIWin(maxChoosableInteger, desiredTotal))