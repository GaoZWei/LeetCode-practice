// 55. 跳跃游戏
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个下标。
var canJump = function (nums) {
    var n = nums.length
    var nextIndex = 0
    for (let i = 0; i <= nextIndex; i++) { //i <= nextIndex 不满足这个,后面就不用遍历了
        nextIndex = Math.max(i + nums[i], nextIndex)
        if (nextIndex >= n - 1) {
            return true
        }
    }
    return false
}

var nums = [2, 3, 1, 1, 4]
var nums = [3, 2, 1, 0, 4]
console.log(canJump(nums))