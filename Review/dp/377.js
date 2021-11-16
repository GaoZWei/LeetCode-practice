// 377. 组合总和 Ⅳ(动态规划:完全背包问题)
// 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

//动态规划:完全背包问题
var combinationSum4 = function (nums, target) {
    var dp = new Array(target + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i >= nums[j]) {
                dp[i] += dp[i - nums[j]]
            }
        }
    }
    return dp[target]
};
var nums = [1, 2, 3],
    target = 4
console.log(combinationSum4(nums, target))