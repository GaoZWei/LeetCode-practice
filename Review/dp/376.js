// 376. 摆动序列(动态规划+贪心)
// 给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。

// 动态规划
var wiggleMaxLength = function (nums) {
    var n = nums.length
    var up = new Array(n).fill(0)
    var down = new Array(n).fill(0)
    up[0] = down[0] = 1
    for (let i = 1; i < n; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1)
            down[i] = down[i - 1]
        } else if (nums[i] < nums[i - 1]) {
            up[i] = up[i - 1]
            down[i] = Math.max(up[i - 1] + 1, down[i - 1])
        } else {
            up[i] = up[i - 1]
            down[i] = down[i - 1]
        }
    }
    return Math.max(up[n - 1], down[n - 1])
}

//贪心
var wiggleMaxLength = function (nums) {
    var n = nums.length
    if (n < 2) return n
    var prevDiff = nums[1] - nums[0]
    var res = prevDiff != 0 ? 2 : 1
    for (let i = 2; i < n; i++) {
        var diff = nums[i] - nums[i - 1]
        if ((diff < 0 && prevDiff >= 0) || (prevDiff <= 0 && diff > 0)) {
            res++
            prevDiff = diff
        }
    }
    return res
}

var nums = [1, 7, 4, 9, 2, 5]
var nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8]
console.log(wiggleMaxLength(nums))