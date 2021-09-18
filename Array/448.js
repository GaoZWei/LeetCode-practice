// 448. 找到所有数组中消失的数字
// 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
// 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
// 输入：nums = [4,3,2,7,8,2,3,1]
// 输出：[5,6]

// 遍历数组,将每个数字交换到理应出现的位置
var findDisappearedNumbers = function (nums) {
    var i = 0
    while (i < nums.length) {
        if (nums[i] == i + 1) { //当前数字本就出现在理想位置,跳过,不用换
            i++
            continue
        }
        var ideaIndex = nums[i] - 1
        if (nums[i] == nums[ideaIndex]) { //当前数字理应出现的位置上,已经存在当前的数字,跳过,不用换
            i++
            continue
        }
        [nums[i], nums[ideaIndex]] = [nums[ideaIndex], nums[i]]
    }
    var res = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) {
            res.push(i + 1)
        }
    }
    return res
};

var nums = [4, 3, 2, 7, 8, 2, 3, 1]

console.log(findDisappearedNumbers(nums))