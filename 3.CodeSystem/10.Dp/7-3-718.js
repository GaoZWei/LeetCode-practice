// 718. 最长重复子数组
// 给两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。

var findLength = function (nums1, nums2) {
    var m = nums1.length
    var n = nums2.length
    var res = 0
    var dp = new Array(m + 1)
    for (let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (nums1[i - 1] == nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1 //以下标i - 1为结尾的A，和以下标j - 1为结尾的B，最长重复子数组长度为dp[i][j]
            }
            res = Math.max(res, dp[i][j])
        }
    }
    return res
};

var nums1 = [1, 2, 3, 2, 1],
    nums2 = [3, 2, 1, 4, 7]
console.log(findLength(nums1, nums2));