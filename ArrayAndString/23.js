// 移动零

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// 直接交换
var moveZeroes = function (nums) {
    if (nums.length < 2) {
        return nums
    }
    let tmp = 0 //tmp指向0存在的位置
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (nums[tmp] == 0) {
                nums[tmp] = nums[i]
                nums[i] = 0
            }
            tmp++
        }
    }
    return nums
};
//splice+push
var moveZeroes = function (nums) {
    if (nums.length < 2) {
        return nums
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            nums.push(0)
        }
    }
    return nums
};
var nums = [0, 1, 0, 3, 4, 0, 12]
console.log(moveZeroes(nums))