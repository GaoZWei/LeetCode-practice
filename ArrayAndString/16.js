// 最大连续1的个数
// 给定一个二进制数组，计算其中最大连续1的个数。
// 输入: [1,1,0,1,1,1]
// 输出: 3
// 解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
// 注意：
// 输入的数组只包含 0 和1。
// 输入数组的长度是正整数，且不超过 10,000。
var findMaxConsecutiveOnes = function (nums) {
    var count = 0;
    var max = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        if (nums[i] == 1) {
            count++
        } else {
            if (max < count) {
                max = count
            }
            count = 0
        }
    }
    return max
};
var nums = [1, 1, 0, 1, 1, 1]
console.log(findMaxConsecutiveOnes(nums))