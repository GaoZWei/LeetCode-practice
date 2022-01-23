// 46.全排列

var permute = function (nums) {
    var res = []
    var path = []
    var dfs = (used) => {
        if (path.length == nums.length) {
            res.push(path.slice())
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            path.push(nums[i])
            used[i] = true
            dfs(used)
            path.pop()
            used[i] = false
        }
    }
    dfs([])
    return res
}
var nums = [1, 2, 3]
console.log(permute(nums));