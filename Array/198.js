// 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，
// 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。

// 思路:
// 直接遍历
// 奇数相加,偶数相加,不可以[2,1,1,2]=>4
var rob = function (nums) {
    var odd = 0 //奇数
    var even = 0
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            even += nums[i]
        } else {
            odd += nums[i]
        }
    }
    return Math.max(odd, even)
};

// 思路2
// 动态规划
var rob = function (nums) {
    var len = nums.length
    if (len == 0) {
        return 0
    }
    var dp = new Array()
    dp[0] = 0 //整体移位了
    dp[1] = nums[0]
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    return dp[len]
}

// 思路3:类似2,这个好理解
var rob = function (nums) {
    var len = nums.length
    var dp = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[len - 1]
}
// var nums = [1, 2, 3, 1]
var nums = [2, 7, 9, 3, 1]
// nums = [2, 1, 1, 2]
console.log(rob(nums))