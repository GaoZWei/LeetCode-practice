// 300. 最长递增子序列(动态规划)
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

//动态规划
var lengthOfLIS = function (nums) {
    var n = nums.length
    var res = 0
    var dp = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
            res = Math.max(res, dp[i])
        }
    }
    return res
}

//二分查找
var lengthOfLIS = function (nums) {
    var n = nums.length
    var top = []
    var piles = 0
    for (let i = 0; i < n; i++) {
        var item = nums[i]
        var left = 0
        var right = piles
        while (left < right) {
            var mid = Math.floor((left + right) / 2)
            if (top[mid] > item) {
                right = mid
            } else if (top[mid] < item) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        if (left == piles) {
            piles++
        }
        top[left] = item
    }
    return piles
}
var nums = [10, 9, 2, 5, 3, 7, 11, 18]
console.log(lengthOfLIS(nums))