// 78. 子集
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

var subsets = function (nums) {
    var res = []
    var path = []
    var dfs = (i) => {
        res.push(path.slice())
        for (let j = i; j < nums.length; j++) {
            path.push(nums[j])
            dfs(j + 1)
            path.pop()
        }
    }
    dfs(0)
    return res
};

var nums = [1, 2, 3]
console.log(subsets(nums))