// 区域和检索 - 数组不可变
// 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

//核心就是 
// 时间O(n),空间O(n),查找只需要O(1),关注优化的过程
var NumArray = function (nums) {
    var preSum = new Array(nums.length + 1)
    preSum[0] = 0
    for (let i = 0; i < nums.length; i++) {
        preSum[i + 1] = preSum[i] + nums[i]
    }
    this.preSum = preSum
};

NumArray.prototype.sumRange = function (left, right) {
    return this.preSum[right + 1] - this.preSum[i]
};