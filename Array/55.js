//跳跃游戏
// 给定一个非负整数数组 nums， 你最初位于数组的 第一个下标。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标。
// 输入： nums = [3, 2, 1, 0, 4]
// 输出： false
// 解释： 无论怎样， 总会到达下标为 3 的位置。 但该下标的最大跳跃长度是 0， 所以永远不可能到达最后一个下标。


// 思路1:
// 找全局最优解判断能否到达最后一位
// 注意i能遍历到的范围
var canJump = function (nums) {
    var nextIndex = 0
    var len = nums.length
    for (let i = 0; i <= nextIndex; i++) { //i <= nextIndex 不满足这个,后面就不用遍历了
        nextIndex = Math.max(nums[i] + i, nextIndex) //每个下标时候的最大覆盖下标
        if (nextIndex >= len - 1) {
            return true
        }
    }
    return false
};

var nums = [3, 2, 1, 0, 4]
// var nums = [2, 3, 1, 1, 4]
var nums = [0]

console.log(canJump(nums))