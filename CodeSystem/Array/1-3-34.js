// 34. 在排序数组中查找元素的第一个和最后一个位置
// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

var searchRange = function (nums, target) {
    var getRightBorder = (nums, target) => {
        var left = 0,
            right = nums.length - 1
        var rightBorder = -2
        while (left <= right) {
            var mid = left + ((right - left) >> 1)
            if (nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
                rightBorder = left
            }
        }
        return rightBorder
    }

    var getLeftBorder = (nums, target) => {
        var left = 0,
            right = nums.length - 1
        var leftBorder = -2
        while (left <= right) {
            var mid = left + ((right - left) >> 1)
            if (nums[mid] >= target) {
                right = mid - 1
                leftBorder = right
            } else {
                left = mid + 1
            }
        }
        return leftBorder
    }

    var leftBorder = getLeftBorder(nums, target)
    var rightBorder = getRightBorder(nums, target)
    //三种情况
    if (leftBorder == -2 || rightBorder == -2) return [-1, -1]
    if (rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1]
    return [-1, -1]
}

var nums = [5, 7, 7, 8, 8, 10],
    target = 8
console.log(searchRange(nums, target))