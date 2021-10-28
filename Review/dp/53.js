// 53. 最大子序和
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

var maxSubArray = function (nums) {
    var n = nums.length
    var pre = 0
    var max = nums[0]
    for (let i = 0; i < n; i++) {
        pre = Math.max(pre + nums[i], nums[i])
        max = Math.max(max, pre)
    }
    return max
}
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))