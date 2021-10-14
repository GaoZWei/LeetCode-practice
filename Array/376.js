// 376.摆动序列
// 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。
// 给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。

//动态规划
var wiggleMaxLength = function (nums) {
    var n = nums.length
    if (n < 2) return n
    var up = new Array(n).fill(0)
    var down = new Array(n).fill(0)
    up[0] = down[0] = 1
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1)
            down[i] = down[n - 1]
        } else if (nums[i] <= nums[i - 1]) {
            down[i] = Math.max(up[i - 1] + 1, down[i - 1])
            up[i] = up[i - 1]
        } else {
            up[i] = up[i - 1]
            down[i] = down[i - 1]
        }
    }
    return Math.max(up[n - 1], down[n - 1])
}

var wiggleMaxLength = function (nums) {
    var n = nums.length
    if (n < 2) return n
    var up = 1
    var down = 1
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            up = Math.max(up, down + 1)
        } else if (nums[i] < nums[i - 1]) {
            down = Math.max(up + 1, down)
        }
    }
    return Math.max(up, down)
}

//动态规划优化最终
var wiggleMaxLength = function (nums) {
    var n = nums.length
    if (n < 2) return n
    var up = 1
    var down = 1
    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            up = down + 1
        } else if (nums[i] < nums[i - 1]) {
            down = up + 1
        }
    }
    return Math.max(up, down)
};

//贪心算法
var wiggleMaxLength = function (nums) {
    var n = nums.length
    if (n < 2) return n
    var prevdiff = nums[1] - nums[0]
    var res = prevdiff != 0 ? 2 : 1
    for (let i = 2; i < n; i++) {
        var diff = nums[i] - nums[i - 1]
        if ((prevdiff >= 0 && diff < 0) || (prevdiff <= 0 && diff > 0)) {
            res++
            prevdiff = diff
        }
    }
    return res
}
var nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
console.log(wiggleMaxLength(nums))