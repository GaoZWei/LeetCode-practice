// 递增的三元子序列
// 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。
// 如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k 
// ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。


//三指针,(不可以,三个数字可以不连续)
var increasingTriplet = function (nums) {
    var n = nums.length
    if (nums.length < 3) {
        return false
    }
    var first = 0
    var second = 1
    var third = 2
    while (third < n) {
        if (nums[first] < nums[second] && nums[second] < nums[third]) {
            return true
        }
        first++
        second++
        third++
    }
    return false
};

//中位数 (比中位数大就满足条件)
var increasingTriplet = function (nums) {
    var n = nums.length
    var min = nums[0]
    var mid = Infinity
    for (let i = 1; i < n; i++) {
        if (nums[i] > mid) return true
        nums[i] <= min ? min = nums[i] : mid = nums[i]
    }
    return false
}

var nums = [1, 2, 3, 4, 5]
var nums = [5, 4, 3, 2, 1]
// var nums = [2, 1, 5, 0, 4, 6]
var nums = [20, 100, 10, 12, 5, 13]
var nums = [1, 1, -2, 6]
console.log(increasingTriplet(nums))