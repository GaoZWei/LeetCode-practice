// 90. 子集 II
// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
var subsetsWithDup = function (nums) {
    var res = []
    var path = []
    nums.sort((a, b) => a - b)
    var dfs = (start) => {
        res.push(path.slice())
        if (start > nums.length - 1) return
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] == nums[i - 1]) continue
            path.push(nums[i])
            dfs(i + 1)
            path.pop()
        }
    }
    dfs(0)
    return res
}
var nums = [1, 2, 2]
console.log(subsetsWithDup(nums));