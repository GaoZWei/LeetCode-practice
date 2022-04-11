// 53. 最大子数组和
// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组
// （子数组最少包含一个元素），返回其最大和。

//贪心
var maxSubArray = function (nums) {
    var n = nums.length
    var result = -Infinity
    var count = 0
    for (let i = 0; i < n; i++) {
        count += nums[i]
        if (count > result) {
            result = count
        }
        if (count < 0) {
            count = 0
        }
    }
    return result
};

//dp
var maxSubArray = function (nums) {
    var n = nums.length
    var result = nums[0]
    var dp = new Array(n).fill(0)
    dp[0] = nums[0]
    for (let i = 1; i < n; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
        if (result < dp[i]) {
            result = dp[i]
        }
    }
    return result
}
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var nums = [5, 4, -1, 7, 8]
console.log(maxSubArray(nums));