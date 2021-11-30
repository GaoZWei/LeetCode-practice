// 209. 长度最小的子数组(滑动窗口)
// 给定一个含有 n 个正整数的数组和一个正整数 target。
// 找出该数组中满足其和≥ target 的长度最小的 连续子数组[numsl, numsl + 1, ..., numsr - 1, numsr]， 并返回其长度。 如果不存在符合条件的子数组， 返回 0。

//滑动窗口
var minSubArrayLen = function (target, nums) {
    var n = nums.length
    var left = 0,
        right = 0,
        sum = 0,
        res = n + 1
    while (right < n) {
        sum += nums[right++]
        while (sum >= target) {
            res = Math.min(res, right - left)
            sum -= nums[left++]
        }
    }
    return res > n ? 0 : res
};
var target = 7,
    nums = [2, 3, 1, 2, 4, 3]
var target = 11,
    nums = [1, 1, 1, 1, 1, 1, 1, 1]
console.log(minSubArrayLen(target, nums))