// 跳跃游戏
//给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
// 假设你总是可以到达数组的最后一个位置。
// 输入: [2, 3, 1, 1, 4]
// 输出: 2
// 解释: 跳到最后一个位置的最小跳跃数是 2。
// 从下标为 0 跳到下标为 1 的位置， 跳 1 步， 然后跳 3 步到达数组的最后一个位置。


//贪心算法
//思路:
// 1.当下标达到当前step覆盖的最大距离下标,step+1,并且更新最大覆盖距离
    // [2,2,1,1,4] 到最后一个1时候,下标i==curIndex,step+1
var jump = function (nums) {
    var len = nums.length
    var curIndex = 0; //当前step最大覆盖范围
    var nextIndex = 0 //下一step的最大覆盖范围
    var step = 0
    for (let i = 0; i < len - 1; i++) { //len-1
        nextIndex = Math.max(nums[i] + i, nextIndex) //判断到每个下标时的最大覆盖下标  (局部最优)
        if (curIndex == i) { //移动下标等于当前step覆盖的最大距离下标,再走一步
            curIndex = nextIndex //更新当前step的覆盖的最大距离下标
            step++
        }
    }
    return step
};
var nums = [2, 3, 1, 1, 4]
console.log(jump(nums))