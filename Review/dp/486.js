// 486. 预测赢家(递归+记忆化递归+动态规划)
// 每一回合，玩家从数组的任意一端取一个数字（即，nums[0] 或 nums[nums.length - 1]），取到的数字将会从数组中移除（数组长度减 1 ）。
// 玩家选中的数字将会加到他的得分上。当数组中没有剩余数字可取时，游戏结束。
// 如果玩家 1 能成为赢家，返回 true 。如果两个玩家得分相等，同样认为玩家 1 是游戏的赢家，也返回 true 。你可以假设每个玩家的玩法都会使他的分数最大化。

//递归
var PredictTheWinner = function (nums) {
    var n = nums.length
    var dfs = (i, j) => {
        if (i == j) return nums[i]
        var pickI = nums[i] - dfs(i + 1, j)
        var pickJ = nums[j] - dfs(i, j - 1)
        return max = Math.max(pickI, pickJ)
    }
    return dfs(0, n - 1) >= 0
};

//记忆化递归
var PredictTheWinner = function (nums) {
    var n = nums.length
    var memory = new Array(n)
    for (let i = 0; i < memory.length; i++) {
        memory[i] = new Array(n)
    }
    var dfs = (i, j) => {
        if (i == j) return nums[i]
        if (memory[i][j]) return memory[i][j]
        var pickI = nums[i] - dfs(i + 1, j)
        var pickJ = nums[j] - dfs(i, j - 1)
        max = Math.max(pickI, pickJ)
        return memory[i][j] = max
    }
    return dfs(0, n - 1) >= 0
}

//动态规划
var PredictTheWinner = function (nums) {
    var n = nums.length
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n)
    }
    for (let i = 0; i < n; i++) {
        dp[i][i] = nums[i]
    }

    for (let i = n - 2; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1])
        }
    }
    return dp[0][n - 1] >= 0
}

var nums = [1, 5, 2]
var nums = [1, 5, 233, 7]
console.log(PredictTheWinner(nums))