//子集2
// 给你一个整数数组 nums， 其中可能包含重复元素， 请你返回该数组所有可能的子集（ 幂集）。
// 解集 不能 包含重复的子集。 返回的解集中， 子集可以按 任意顺序 排列。
// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

// 思路:
// 排序
// 直接往里放,遇到与上一个相同的,跳过
var subsetsWithDup = function (nums) {
    var len = nums.length
    nums.sort((a, b) => a - b)
    var res = []
    var tmp = []
    const dfs = (start) => {
        res.push(tmp.slice())
        if (tmp.length == len) {
            return
        }
        for (let i = start; i < len; i++) {
            if (i > start && nums[i] == nums[i - 1]) { //遇见与上一个相同的,跳过
                continue
            }
            tmp.push(nums[i])
            dfs(i + 1)
            tmp.pop()
        }
    }
    dfs(0)
    return res
};


// 思路2:
// 官方解法
// 在递归时，若发现没有选择上一个数，且当前数字与上一个数相同，则可以跳过当前生成的子集。
var subsetsWithDup = function (nums) {
    var len = nums.length
    nums.sort((a, b) => a - b)
    var res = []
    var tmp = []
    var dfs = (isChoose, cur) => {
        // console.log(cur,tmp)
        if (cur == len) {
            res.push(tmp.slice())
            return
        }
        dfs(false, cur + 1)
        if (!isChoose && cur > 0 && nums[cur] == nums[cur - 1]) { //若发现没有选择上一个数，且当前数字与上一个数相同，则可以跳过当前生成的子集。
            return
        }
        tmp.push(nums[cur])
        dfs(true, cur + 1)
        tmp.pop()
        // tmp = tmp.slice(0, tmp.length - 1) //去掉一个,与pop等价
        // console.log(tmp)
    }
    dfs(false, 0)
    return res
};

var nums = [1, 2, 2]
// nums = [0]
var nums = [4, 4, 4, 1, 4]
console.log(subsetsWithDup(nums))