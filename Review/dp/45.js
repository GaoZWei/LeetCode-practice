// 45. 跳跃游戏 II(动态规划/贪心)
// 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 你的目标是使用最少的跳跃次数到达数组的最后一个位置。

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