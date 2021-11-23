// 35. 搜索插入位置
// 给定一个排序数组和一个目标值， 在数组中找到目标值， 并返回其索引。 如果目标值不存在于数组中， 返回它将会被按顺序插入的位置。
// 请必须使用时间复杂度为 O(log n) 的算法。

var searchInsert = function (nums, target) {
    var n = nums.length
    var left = 0,
        right = n - 1
    var mid
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return right + 1 //这是精髓
};
//也可以
// while (left < right) return left / right 都可以
var nums = [1, 3, 5, 7, 9],
    target = 6
console.log(searchInsert(nums, target))