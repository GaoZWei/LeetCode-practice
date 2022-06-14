// 45. 跳跃游戏 II
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

// 记住用curIndex,nextIndex保存范围就可以
var jump = function (nums) {
    var curIndex = 0
    var nextIndex = 0
    var step = 0
    for (let i = 0; i < nums.length - 1; i++) {
        nextIndex = Math.max(i + nums[i], nextIndex)
        if (curIndex == i) {
            curIndex = nextIndex
            step++
        }
    }
    return step
};

var nums = [2, 3, 1, 1, 4]
console.log(jump(nums));