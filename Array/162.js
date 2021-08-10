//寻找峰值
// 峰值元素是指其值大于左右相邻值的元素。
// 给你一个输入数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，
// 在这种情况下，返回 任何一个峰值 所在位置即可

// 输入：nums = [1,2,3,1]
// 输出：2
// 解释：3 是峰值元素，你的函数应该返回其索引 2。

//思路一:直接遍历
var findPeakElement = function (nums) {
    if (nums.length == 1) {
        return 0
    }
    if (nums.length == 2) {
        if (nums[0] > nums[1]) {
            return 0
        } else {
            return 1
        }
    }
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) { //中间比两侧大
            return i
        } else if (nums[i] > nums[i - 1] && i == nums.length - 1) { //最后一项最大
            return nums.length - 1
        }
    }
    return 0
};

// 思路2:
// 二分查找,因为要求了时间复杂度,观察题目提示!! 负无穷 
// 判断哪一段是上升的/下降的
var findPeakElement = function (nums) {
    var left = 0;
    var right = nums.length - 1
    while (left < right) {
        var mid = parseInt((left + right) / 2)
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1
        } else {
            right = mid //这块要注意包含mid,因为mid可能是峰值!!!
        }
    }
    return left
}

var nums = [1, 2, 3, 1] //2
nums = [1] //0
nums = [3, 2, 1] //0
nums = [1, 2, 3] //2
nums = [1, 2] //1
nums = [1, 2, 1, 3, 5, 6, 4] //5
console.log(findPeakElement(nums))