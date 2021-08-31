// 最长递增子序列
// 给你一个整数数组 nums， 找到其中最长严格递增子序列的长度。
// 输入： nums = [10, 9, 2, 5, 3, 7, 101, 18]
// 输出： 4
// 解释： 最长递增子序列是[2, 3, 7, 101]， 因此长度为 4。

//动态规划
var lengthOfLIS = function (nums) {
    var dp = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        // 将i和i之前的比较
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1) //核心
            }
        }
    }
    var res = 0
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i])
    }
    return res
};

// 二分法
var lengthOfLIS = function (nums) {
    var top = [] //每堆的堆顶
    var piles = 0 //堆数
    for (let i = 0; i < nums.length; i++) {
        var left = 0
        var right = piles
        while (left < right) {
            var mid = Math.floor((left + right) / 2)
            if (top[mid] > nums[i]) {
                right = mid
            } else if (top[mid] < nums[i]) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        if (left == piles) { //没找到合适的堆,新建一堆
            piles++
        }
        top[left] = nums[i] //只改堆顶,重复也无所谓(其他的都覆盖掉了)
    }
    return piles
}

var nums = [10, 9, 2, 5, 3, 7, 101, 18]
// var nums = [0, 1, 0, 3, 2, 3]
// var nums = [7, 7, 7, 7, 7, 7, 7]
console.log(lengthOfLIS(nums))