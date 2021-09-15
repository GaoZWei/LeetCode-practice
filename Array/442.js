// 442. 数组中重复的数据
// 给定一个整数数组 a，其中1 ≤ a[i] ≤ n （n为数组长度）, 其中有些元素出现两次而其他元素出现一次。
// 找到所有出现两次的元素。

// 输入:
// [4,3,2,7,8,2,3,1]
// 输出:
// [2,3]


// 原地hash,每次乘-1
var findDuplicates = function (nums) {
    var n = nums.length
    var res = []
    for (let i = 0; i < n; i++) {
        var absNum = Math.abs(nums[i])
        if (nums[absNum - 1] < 0) { //-1防止下标越界
            res.push(absNum)
        } else {
            nums[absNum - 1] *= -1
        }
    }
    return res
};
var nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDuplicates(nums))