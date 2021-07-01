//搜索旋转排序数组
// 整数数组 nums 按升序排列，数组中的值 互不相同 。

// 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了
//  旋转，使数组变为 [nums[k], nums[k+1], ...,nums[n-1], nums[0], nums[1], ..., nums[k-1]]
//（下标 从 0 开始 计数）。
//   例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

// 给你 旋转后 的数组 nums 和一个整数 target ，
// 如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。


// 思路:二分查找
// 找mid,左边或者右边一个一定有序,然后在两边移动指针查找

var search = function (nums, target) {
    var len = nums.length
    if (len == 0) {
        return -1
    }
    if (len == 1) {
        return nums[0] == target ? 0 : -1
    }
    var left = 0
    var right = len - 1
    while (left < right) {
        var mid = parseInt((left + right) / 2)
        console.log(mid)
        if (nums[mid] == target) {
            return mid
        }
        if (nums[left] < nums[mid]) { //左边是升序
            if (nums[left] <= target && nums[mid] >= target) { //target 在左边的升序数组
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else { //右边是升序
            if (nums[mid + 1] <= target && nums[right] >= target) { //target 在右边的升序数组
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return nums[left] == target ? left : -1
};
var nums = [4, 5, 6, 7, 0, 1, 2]
var target = 0

var nums = [4, 5, 6, 7, 8, 9, 0, 1, 2, 3]
var target = 1

var nums = [2]
var target = 1
console.log((search(nums, target)))