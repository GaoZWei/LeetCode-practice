// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
// 输入: [1,3,5,6], 5
// 输出: 2
// 输入: [1,3,5,6], 7
// 输出: 4
// 输入: [1,3,5,6], 2
// 输出: 1

//暴力破解法
var searchInsert = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target < nums[0]) {
            return 0
        } else if (target <= nums[i]) {
            return i
        } else if (target > nums[nums.length - 1]) {
            return nums.length
        }
    }
};

//二分查找法
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        // mid = (left + right)>>1   右移 除以2的n次方倍
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        }
    }
    return left
};



nums = [1, 3, 5, 6]
console.log(searchInsert(nums, 5))