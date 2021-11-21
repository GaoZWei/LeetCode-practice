// 473. 火柴拼正方形(回溯)
// 输入为小女孩拥有火柴的数目，每根火柴用其长度表示。输出即为是否能用所有的火柴拼成正方形。

//回溯
var makesquare = function (nums) {
    nums.sort((a, b) => b - a)
    var n = nums.length
    var add = nums.reduce((a, b) => a + b)
    if (add % 4 != 0) return false
    var target = add / 4
    var sum = new Array(4).fill(0)
    var dfs = (index) => {
        if (index == n) {
            return sum[0] == sum[1] && sum[1] == sum[2] && sum[2] == sum[3]
        }
        var currentLen = nums[index]
        for (let i = 0; i < sum.length; i++) {
            if (sum[i] + currentLen <= target) {
                sum[i] += currentLen
                if (dfs(index + 1)) return true
                sum[i] -= currentLen
            }
        }
        return false
    }
    return dfs(0)
}
var nums = [1, 1, 2, 2, 2]
console.log(makesquare(nums))