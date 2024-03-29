// 413. 等差数列划分
// 如果一个数列 至少有三个元素， 并且任意两个相邻元素之差相同， 则称该数列为等差数列。
// 例如，[1, 3, 5, 7, 9]、[7, 7, 7, 7] 和[3, -1, -5, -9] 都是等差数列。
// 给你一个整数数组 nums， 返回数组 nums 中所有为等差数组的 子数组 个数。
// 子数组 是数组中的一个连续序列。

// 输入：nums = [1,2,3,4]
// 输出：3
// 解释：nums 中有三个子等差数组：[1, 2, 3]、[2, 3, 4] 和 [1,2,3,4] 自身。

//extra表示额外的,累加即可
var numberOfArithmeticSlices = function (nums) {
    var n = nums.length
    if (n < 3) {
        return 0
    }
    var d = nums[1] - nums[0]
    var extra = 0 //额外的
    var res = 0
    for (let i = 2; i < n; i++) {
        if (nums[i] - nums[i - 1] == d) {
            extra++
        } else {
            d == nums[i] - nums[i - 1]
            extra = 0
        }
        res += extra //累加 (其他类似,改extra计算方式就可以)
    }
    return res
};

var nums = [1, 2, 3, 4]
console.log(numberOfArithmeticSlices(nums))