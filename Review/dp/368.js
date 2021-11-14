// 368. 最大整除子集(动态规划)
// 给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer
// answer[i] % answer[j] == 0

//回溯(失败)
var largestDivisibleSubset = function (nums) {
    var n = nums.length
    var res = []

    var dfs = (tmp, index) => {
        if (index == n) {
            res.push(tmp.slice())
            return
        }

        for (let i = index; i < n; i++) {
            if (nums[i] % nums[index] != 0) continue
            tmp.push(nums[i])
            dfs(tmp, i + 1)
            tmp.pop()
        }
    }
    dfs([], 0)


    var arr = new Array()
    for (let i = 0; i < res.length; i++) {
        arr[i] = res[i].length
    }
    var index = Math.max(...arr)
    return res[arr.indexOf(index)]
};

//动态规划
var largestDivisibleSubset = function (nums) {
    var n = nums.length
    nums.sort((a, b) => a - b)
    var dp = new Array(n).fill(1)
    var maxSize = 1
    var maxVal = dp[0]
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] == 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        if (dp[i] > maxSize) {
            maxSize = dp[i]
            maxVal = nums[i]
        }
    }
    var arr = []
    if (maxSize == 1) {
        arr.push(nums[0])
        return arr
    }
    for (let i = n - 1; i >= 0 && maxSize > 0; i--) {
        if (dp[i] == maxSize && maxVal % nums[i] == 0) {
            arr.unshift(nums[i]) //在前面插入
            maxVal = nums[i]
            maxSize--
        }
    }
    return arr
}
var nums = [1, 2, 4, 8]
// var nums = [3, 17]
console.log(largestDivisibleSubset(nums))