// 152. 乘积最大子数组 (动态规划)
// 给你一个整数数组 nums ，
// 请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

var maxProduct = function (nums) {
    var n = nums.length
    var prevMax = nums[0]
    var prevMin = nums[0]
    var res = nums[0];
    for (let i = 1; i < n; i++) {
        var tmp1 = prevMax * nums[i]
        var tmp2 = prevMin * nums[i]
        prevMax = Math.max(tmp1, tmp2, nums[i])
        prevMin = Math.min(tmp1, tmp2, nums[i])
        res = Math.max(res, prevMax)
    }
    return res
}

var nums = [2, 3, -2, 4]
console.log(maxProduct(nums))