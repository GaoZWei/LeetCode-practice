// 戳气球
// 有 n 个气球，编号为0 到 n - 1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
// 现在要求你戳破所有的气球。戳破第 i 个气球，你可以获得 nums[i - 1] * nums[i] * nums[i + 1] 枚硬币。 这里的 i - 1 和 i + 1 代表和 i 相邻的两个气球的序号。如果 i - 1或 i + 1 超出了数组的边界，那么就当它是一个数字为 1 的气球。
// 求所能获得硬币的最大数量。
// 输入：nums = [3,1,5,8]
// 输出：167
// 解释：
// nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
// coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

// 思路1:回溯法
var maxCoins = function (nums) {
    var res = 0
    var getCoin = (nums, score) => {
        //终止条件
        if (nums.length == 0) {
            res = Math.max(res, score)
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            var left = i - 1 >= 0 ? nums[i - 1] : 1
            var right = i + 1 < nums.length ? nums[i + 1] : 1
            var point = left * nums[i] * right //本次的乘积
            var tmpArr = [].concat(nums) //暂存数组
            nums.splice(i, 1)
            getCoin(nums, score + point)
            nums = [...tmpArr] //回撤
        }
    }
    getCoin(nums, 0)
    return res
};

//动态规划 难!!!
var maxCoins = function (nums) {
    var n = nums.length
    var points = [1, ...nums, 1] //虚拟气球
    var dp = new Array(n + 2) //初始化dp
    for (let i = 0; i < n + 2; i++) {
        dp[i] = new Array(n + 2).fill(0)
    }
    for (let i = n; i >= 0; i--) {
        for (let j = i + 1; j < n + 2; j++) {
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[k][j] + points[i] * points[j] * points[k]) //i,j不一定是k-1,可能已经被戳破了
            }
        }
    }
    return dp[0][n + 1]
}

var nums = [3, 1, 5, 8]
console.log(maxCoins(nums))