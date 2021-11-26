// 977. 有序数组的平方
// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
//这个有问题
var sortedSquares = function (nums) {
    var i = 0,
        j = nums.length - 1
    var tmp
    while (i <= j) {
        var squareI = nums[i] * nums[i]
        var squareJ = nums[j] * nums[j]
        if (squareI > squareJ) {
            tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
            j--
        } else {
            i++
        }
        // else {
        //     j-- //这个有问题
        // }
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    return nums
};

//用一个数组存储
var sortedSquares = function (nums) {
    var res = []
    for (let i = 0, j = nums.length - 1; i <= j;) {
        var left = Math.abs(nums[i])
        var right = Math.abs(nums[j])
        if (right > left) {
            res.unshift(right * right)
            j--
        } else {
            res.unshift(left * left)
            i++
        }
    }
    return res
}


var nums = [-4, -1, 0, 3, 10]
var nums = [-7, -3, 2, 3, 11]
var nums = [-5, -3, -2, -1]
console.log(sortedSquares(nums))