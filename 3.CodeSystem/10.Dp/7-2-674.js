// 674. 最长连续递增序列
// 给定一个未经排序的整数数组，找到最长且 连续递增的子序列，并返回该序列的长度。

// dp
var findLengthOfLCIS = function (nums) {
    var n = nums.length
    var dp = new Array(n).fill(1)
    var res = 1
    for (let i = 0; i < n; i++) {
        if (nums[i + 1] > nums[i]) { //只看前一个状态
            dp[i + 1] = dp[i] + 1
        }
        res = Math.max(res, dp[i])
    }
    return res
};

//贪心
var findLengthOfLCIS = function (nums) {
    var count = 1
    var res = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] > nums[i]) {
            count++
        } else {
            count = 1
        }
        res = Math.max(res, count)
    }
    return res
}


var nums = [1, 3, 5, 4, 7]
console.log(findLengthOfLCIS(nums));