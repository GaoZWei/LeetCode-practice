// 416. 分割等和子集 (动态规划+背包)
// 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

// 动态规划
var canPartition = function (nums) {
    var sum = nums.reduce((a, b) => a + b)
    if (sum % 2 != 0) return false
    var target = sum / 2
    var n = nums.length
    var dp = new Array(n + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }
    //初始化
    for (let j = nums[0]; j <= target; j++) {
        dp[0][j] = nums[0]
    }
    for (let i = 1; i < n; i++) {
        for (let j = 0; j <= target; j++) {
            if (nums[i] <= j) {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - nums[i]] + nums[i])
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[n - 1][target] == target
}

// 一维背包
var canPartition = function (nums) {
    var n = nums.length
    var sum = nums.reduce((a, b) => a + b)
    if (sum % 2 != 0) return false
    var target = sum / 2

    var dp = new Array(target + 1).fill(0)

    for (let i = 0; i < n; i++) {
        for (let j = target; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
            if (dp[j] == target) return true
        }
    }
    return dp[target] == target
}


var nums = [1, 5, 11, 5]
console.log(canPartition(nums))