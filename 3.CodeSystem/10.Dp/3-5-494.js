// 494. 目标和
// 给你一个整数数组 nums 和一个整数 target 。
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：
// 例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

// 01背包的思考:
// 正数和-负数和=target
// 正数和+负数和=sum
// 正数和-(sum-正数和)=target
// 正数和=(sum+target)/2   (背包)

var findTargetSumWays = function (nums, target) {
    var sum = nums.reduce((a, b) => a + b)
    var left = (sum + target) / 2
    if ((sum + target) % 2 == 1) return 0
    if (Math.abs(target) > sum) return 0
    var dp = new Array(left + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = left; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
    }
    return dp[left]
};

// dp[i][j] 在nums中的前i个选取元素,使这些元素之和等于j的方案数
// https://leetcode.cn/problems/target-sum/solution/mu-biao-he-by-leetcode-solution-o0cp/
var findTargetSumWays = function (nums, target) {
    var sum = nums.reduce((a, b) => a + b)
    var left = (sum + target) / 2
    if ((sum + target) % 2 == 1) return 0
    if (Math.abs(target) > sum) return 0
    var n = nums.length
    var dp = new Array(n + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(left + 1).fill(0)
    }
    dp[0][0] = 1
    for (let i = 1; i <= n; i++) {
        var num = nums[i - 1]
        for (let j = 0; j <= left; j++) {
            dp[i][j] = dp[i - 1][j]
            if (j >= num) {
                dp[i][j] += dp[i - 1][j - num]
            }
        }
    }
    console.table(dp);
    console.log(dp[n][left]);
    return dp[n][left]
}

var nums = [1, 1, 1, 1, 1],
    target = 3
// var nums = [1],
//     target = 1
console.log(findTargetSumWays(nums, target));