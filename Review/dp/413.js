// 413. 等差数列划分(动态规划)
// 等差数列。给你一个整数数组 nums ，返回数组 nums 中所有为等差数组的 子数组 个数。

//动态规划
var numberOfArithmeticSlices = function (nums) {
    var n = nums.length
    if (n < 3) return 0
    var extra = 0
    var res = 0
    var d = nums[1] - nums[0]
    for (let i = 2; i < n; i++) {
        if (nums[i] - nums[i - 1] == d) {
            extra++
        } else {
            d = nums[i] - nums[i - 1]
            extra = 0
        }
        res += extra
    }
    return res
}
var nums = [1, 2, 3, 4]
console.log(numberOfArithmeticSlices(nums))