// 打家劫舍2
// 房屋围成一个圈,问,如何才能偷取最大金额

// 思路:
// 找范围,判断两个范围 (没选第一个,没选最后一个)
var rob = function (nums) {
    var n = nums.length
    if (n == 1) {
        return nums[0]
    }
    if (n == 2) {
        return Math.max(nums[0], nums[1])
    }
    return Math.max(robArea(1, n - 1, nums), robArea(0, n - 2, nums)) //两个范围 (没选第一个,没选最后一个)!!!
};

var robArea = (start, end, nums) => {
    var first = nums[start]
    var second = Math.max(nums[start], nums[start + 1]) //先取前两个元素,判断
    for (let i = start + 2; i <= end; i++) {
        var tmp = second
        second = Math.max(second, first + nums[i])
        first = tmp
    }
    return second
}

var nums = [2, 3, 2]
nums = [1, 2, 3, 1]
nums = [1, 3, 1, 3, 100]
console.log(rob(nums))