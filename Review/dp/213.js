// 213. 打家劫舍 II (动态规划)
// 围成一圈
// 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
// 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

var rob = function (nums) {
    var n = nums.length
    if (n == 1) return nums[0]
    if (n == 2) return Math.max(nums[0], nums[1])
    return Math.max(robArea(1, n - 1, nums), robArea(0, n - 2, nums))
}
var robArea = (start, end, nums) => {
    var first = nums[start]
    var second = Math.max(nums[start], nums[start + 1])
    for (let i = start + 2; i <= end; i++) {
        var tmp = second
        second = Math.max(second, first + nums[i]) //类比 dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        first = tmp
    }
    return second
}
var nums = [1, 2, 3, 1]
console.log(rob(nums))