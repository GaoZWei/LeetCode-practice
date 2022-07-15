// 213. 打家劫舍 II

//分别去头,去尾,两者比较即可
const robRange = (nums, start, end) => {
    if (start == end) return nums[start]
    var dp = new Array(nums.length).fill(0)
    dp[start] = nums[start]
    dp[start + 1] = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[end]
}

var rob = function (nums) {
    var n = nums.length
    if (n == 0) return 0
    if (n == 1) return nums[0]
    var noEnd = robRange(nums, 0, n - 2)
    var noHead = robRange(nums, 1, n - 1)
    return Math.max(noEnd, noHead)
};

var nums = [2, 3, 2]
var nums = [1, 2, 3, 1]
console.log(rob(nums));