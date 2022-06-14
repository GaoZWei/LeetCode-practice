// 283. 移动零
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

var moveZeroes = function (nums) {
    var n = nums.length
    var k = 0
    for (let i = 0; i < n; i++) {
        if (nums[i] != 0) {
            nums[k++] = nums[i]
        }
    }
    for (let i = k; i < n; i++) {
        nums[i] = 0
    }
    return nums
};
var nums = [0, 1, 0, 3, 12]
var nums = [0, 1, 0, 3, 4, 0, 12]
console.log(moveZeroes(nums))