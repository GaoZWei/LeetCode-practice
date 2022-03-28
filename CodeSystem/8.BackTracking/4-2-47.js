// 47.全排列 II
// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

// 一般来说：组合问题和排列问题是在树形结构的叶子节点上收集结果，而子集问题就是取树上所有节点的结果。
// 还要强调的是去重一定要对元素进行排序，这样我们才方便通过相邻的节点来判断是否重复使用了。
// 在46.全排列 中已经详解讲解了排列问题的写法，
// 在40.组合总和II 、 90.子集II 中详细讲解的去重的写法，
var permuteUnique = function (nums) {
    var res = []
    var path = []
    nums.sort((a, b) => a - b)
    var dfs = (used) => {
        if (path.length == nums.length) {
            res.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            // 对于排列问题，树层上去重和树枝上去重，都是可以的，但是树层上去重效率更高！
            if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue
            if (!used[i]) {
                used[i] = true
                path.push(nums[i])
                dfs(used)
                path.pop()
                used[i] = false
            }
        }
    }
    dfs([])
    return res
};

var nums = [1, 1, 2]
console.log(permuteUnique(nums));