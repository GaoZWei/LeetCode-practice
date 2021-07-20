//子集
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

//思路1:
// 每次直接放进去
var subsets = function (nums) {
    var n = nums.length
    var arr = []
    var tmp = []
    const dfs = (index) => {
        arr.push(tmp.slice()) //直接放进去
        for (let i = index; i < n; i++) {
            tmp.push(nums[i])
            dfs(i + 1) //直接从后面遍历
            tmp.pop()
        }
    }
    dfs(0)
    return arr
};

// 思路2:
// 单看每个元素,选入解集和不选入解集
// 先看1,选/不选,两个分支,以此类推
var subsets = function (nums) {
    var len = nums.length
    var arr = []
    const dfs = (index, tmp) => {
        if (index == len) { //从后往回返回
            arr.push(tmp.slice())
            return
        }
        tmp.push(nums[index]) //选择加入解集
        dfs(index + 1, tmp)
        tmp.pop()
        dfs(index + 1, tmp) //选择不加入解集 
    }
    dfs(0, [])
    return arr
}
var nums = [1, 2, 3]
console.log(subsets(nums))