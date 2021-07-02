// 在排序数组中查找元素的第一个和最后一个位置

// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

// 输入：nums = [], target = 0
// 输出：[-1,-1]
// 你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

// 思路:
// 1.二分查找,找左侧等于target,右侧第一个大于target的
var findOneIndex = function (nums, target, lower) {
    var len = nums.length
    var left = 0;
    var right = len - 1
    var ans = len
    while (left <= right) {
        var mid = parseInt((left + right) / 2)
        if (nums[mid] > target || (lower && nums[mid] >= target)) { //特殊在于,不加lower就没有相等的情况,只会找到比target大的位置!!!
            right = mid - 1
            ans = mid
        } else {
            left = mid + 1
        }
    }
    return ans
}

var searchRange = function (nums, target) {
    var ans = [-1, -1]
    var leftIndex = findOneIndex(nums, target, true)
    var rightIndex = findOneIndex(nums, target, false) - 1
    if (nums[leftIndex] == nums[rightIndex] && leftIndex <= rightIndex && rightIndex < nums.length) {
        ans = [leftIndex, rightIndex]
    }
    return ans
};

var nums = [5, 7, 7, 8, 8, 10]
var target = 8
console.log(searchRange(nums, target))