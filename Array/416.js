// 416. 分割等和子集
// 给你一个 只包含正整数 的 非空 数组 nums。
// 请你判断是否可以将这个数组分割成两个子集， 使得两个子集的元素和相等。

// 求和+排序+累加 (不可以,也许不能连续累加)
var canPartition = function (nums) {
    var sum = nums.reduce((a, b) => a + b)
    var half = sum / 2
    nums.sort((a, b) => a - b)
    var tmpSum = 0
    for (let i = 0; i < nums.length; i++) {
        tmpSum += nums[i]
        if (tmpSum == half) {
            return true
        } else if (tmpSum > half) {
            return false
        }
    }
};

//dfs+map缓存(记忆化递归),需要遍历所有情况
var canPartition = function (nums) {
    var n = nums.length
    if (n < 2) return false
    var sum = nums.reduce((a, b) => a + b)
    if (sum % 2 != 0) return false //奇数不可以
    var half = sum / 2
    var map = new Map()

    var dfs = (curSum, i) => {
        console.log(curSum, i)
        if (i == n || curSum > half) return false
        if (curSum == half) return true
        var key = curSum + '&' + i
        if (map.has(key)) {
            return map.get(key)
        }
        var res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1)
        map.set(key, res)
        return res
    }
    return dfs(0, 0)
}


//动态规划(最好理解的)
var canPartition = function (nums) {
    var n = nums.length
    if (n < 2) return false
    var sum = nums.reduce((a, b) => a + b)
    if (sum % 2 != 0) return false //奇数不可以
    var target = sum / 2

    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(false)
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= target; j++) {
            if (i == 0) {
                dp[i][j] = nums[i] == j
                continue
            }
            //三种情况
            dp[i][j] = dp[i - 1][j] || nums[i] == j || (j > nums[i] ? dp[i - 1][j - nums[i]] : false)
        }
    }
    return dp[n - 1][target]
};

//优化动态规划(二维=>一维)
var canPartition = function (nums) {
    var n = nums.length
    if (n < 2) return false
    var sum = nums.reduce((a, b) => a + b)
    if (sum % 2 != 0) return false //奇数不可以
    var target = sum / 2

    var dp = new Array(n).fill(false)
    dp[0] = true
    for (let i = 0; i < n; i++) {
        for (let j = target; j > 0; j--) { //从大到小
            dp[j] = dp[j] || (j >= nums[i] && dp[j - nums[i]])
        }
    }
    return dp[target]
};

var nums = [1, 5, 11, 5]
var nums = [1, 2, 3, 5]
var nums = [2, 2, 1, 1]
var nums = [1, 2, 5]
console.log(canPartition(nums))