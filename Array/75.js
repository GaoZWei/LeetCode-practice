// 75. 颜色分类
// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，
// 原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
// 输入：nums = [2,0,2,1,1,0]
// 输出：[0,0,1,1,2,2]

// 思路:
// 双指针+1个遍历,类似三指针
//遇到2,就和right交换
//遇到0,就和left交换
var sortColors = function (nums) {
    var len = nums.length
    var left = 0
    var right = len - 1
    for (let i = 0; i < len; i++) {
        while (nums[i] == 2 && i < right) { //遇到2,就和right交换
            let tmp = nums[i]
            nums[i] = nums[right]
            nums[right] = tmp
            right--
        }
        if (nums[i] == 0) { //遇到0,就和left交换
            let tmp = nums[i]
            nums[i] = nums[left]
            nums[left] = tmp
            left++
        }
    }
    return nums
};


var nums = [2, 0, 2, 1, 1, 0]
console.log(sortColors(nums))