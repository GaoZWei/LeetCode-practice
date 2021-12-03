// 704. 二分查找
// 给定一个 n 个元素有序的（ 升序） 整型数组 nums 和一个目标值 target， 写一个函数搜索 nums 中的 target， 如果目标值存在返回下标， 否则返回 - 1。

var search = function (nums, target) {
    var n = nums.length
    var left = 0,
        right = n - 1
    while (left <= right) {
        var mid = Math.floor((left + right) / 2)
        if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            return mid
        }
    }
    return -1
};
var nums = [-1, 0, 3, 5, 9, 12],
    target = 9
var nums = [-1, 0, 3, 5, 9, 12],
    target = 2
console.log(search(nums, target))