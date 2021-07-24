// 搜索旋转排序数组 II
// 已知存在一个按非降序排列的整数数组 nums ，数组中的值不必互不相同。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转 ，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,4,4,5,6,6,7] 在下标 5 处经旋转后可能变为 [4,5,6,6,7,0,1,2,4,4] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，请你编写一个函数来判断给定的目标值是否存在于数组中。如果 nums 中存在这个目标值 target ，则返回 true ，否则返回 false 。

// 输入：nums = [2,5,6,0,0,1,2], target = 0
// 输出：true

//思路1:
// 二分查找
// 重复元素不容易判断哪边是有序的
// nums[mid] == nums[left] && nums[mid] == nums[right]   时需要把区间缩小,继续二分查找
var search = function (nums, target) {
    var len = nums.length
    if (len == 0) {
        return false
    }
    if (len == 1) {
        return nums[0] == target
    }
    var left = 0;
    var right = len - 1
    while (left <= right) {
        var mid = parseInt((left + right) / 2)
        if (nums[mid] == target) {
            return true
        }
        if (nums[mid] == nums[left] && nums[mid] == nums[right]) { //mid =left =right value 缩小区间
            left++
            right--
        } else if (nums[left] <= nums[mid]) { //左侧是有序 <=因为会有重复数
            if (nums[left] <= target && nums[mid] >= target) { //target在左边的升序数组
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else { //右侧是有序
            if (nums[mid] <= target && nums[len - 1] >= target) { //target在右边的升序数组
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return false
};
var nums = [2, 5, 6, 0, 0, 1, 2],
    target = 0
var nums = [2, 5, 6, 0, 0, 1, 2],
    target = 3
var nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1],
    target = 2
console.log(search(nums, target))