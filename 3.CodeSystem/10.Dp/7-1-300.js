// 300. 最长递增子序列
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

var lengthOfLIS = function (nums) {
    var n = nums.length
    var dp = new Array(n).fill(1)
    var res = 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) { //看前面的所有状态
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])
    }
    return res
};
var nums = [10, 9, 2, 5, 3, 7, 101, 18]
var nums = [1, 3, 6, 7, 9, 4, 10, 5, 6]
console.log(lengthOfLIS(nums));