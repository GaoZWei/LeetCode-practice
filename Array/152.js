//乘积最大子数组
// 给你一个整数数组 nums ，
// 请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
// 输入: [2,3,-2,4]
// 输出: 6
// 解释: 子数组 [2,3] 有最大乘积 6。


// 思路:
// 从前往后计算局部最优
//关键是分析j的时候,正,负,
// 三个选择
// {正*前面最大的,负*前面最小的,自己}
var maxProduct = function (nums) {
    var res = nums[0];
    var preMin = nums[0]
    var preMax = nums[0]
    var tmp1 = 0, //tmp避免覆盖问题
        tmp2 = 0
    for (let i = 1; i < nums.length; i++) {
        tmp1 = preMin * nums[i]
        tmp2 = preMax * nums[i]
        preMin = Math.min(nums[i], tmp1, tmp2)
        preMax = Math.max(nums[i], tmp1, tmp2)
        res = Math.max(res, preMax)
    }
    return res
};
var nums = [2, 3, -2, 4]
nums = [-2, 0, -1]

console.log(maxProduct(nums))