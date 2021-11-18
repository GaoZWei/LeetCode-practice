// 396. 旋转函数(动态规划,找规律)
// 给定一个长度为 n 的整数数组 A 。计算F(0), F(1), ..., F(n-1)中的最大值。

var maxRotateFunction = function (nums) {
    var len = nums.length
    if (!len) return 0
    var max = 0
    var sum = 0
    for (let i = 0; i < len; i++) {
        sum += nums[i] //所有的和
        max += nums[i] * i //F(0)
    }
    var tmp = max
    for (let i = 1; i < len; i++) {
        var lastOne = nums[len - i] //最后一个元素
        tmp = tmp - lastOne * len + sum //递推公式
        max = Math.max(tmp, max)
    }
    return max
};

var nums = [1, 2, 3]
console.log(maxRotateFunction(nums))