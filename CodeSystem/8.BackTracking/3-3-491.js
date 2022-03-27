// 491. 递增子序列
// 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。

// 数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
var findSubsequences = function (nums) {
    var res = []
    var tmp = []
    var dfs = (start) => {
        if (tmp.length > 1) {
            res.push(tmp.slice())
        }
        var used = []
        for (let i = start; i < nums.length; i++) {
            if ((tmp.length > 0 && nums[i] < tmp[tmp.length - 1]) || used[nums[i]]) continue
            used[nums[i]] = true
            tmp.push(nums[i])
            dfs(i + 1)
            tmp.pop()
        }
    }
    dfs(0)
    return res
};
var nums = [4, 6, 7, 7]
console.log(findSubsequences(nums));