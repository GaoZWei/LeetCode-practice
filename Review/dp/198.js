// 198. 打家劫舍(动态规划)
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

//动态规划
var rob = function (nums) {
    var n = nums.length
    var dp = new Array(n)
    dp = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[n - 1]
}
var nums = [2,7,9,3,1]
console.log(rob(nums))