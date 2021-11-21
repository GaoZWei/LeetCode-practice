// 474. 一和零(动态规划,01背包)
// 给你一个二进制字符串数组 strs 和两个整数 m 和 n。
// 请你找出并返回 strs 的最大子集的长度， 该子集中 最多 有 m 个 0 和 n 个 1。

// 动态规划,01背包
var findMaxForm = function (strs, m, n) {
    var dp = new Array(m + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }
    var zeroNum, oneNum
    for (let str of strs) {
        zeroNum = 0
        oneNum = 0
        for (let c of str) {
            if (c == "0") zeroNum++
            else oneNum++
        }
        for (let i = m; i >= zeroNum; i--) { //从后向前遍历
            for (let j = n; j >= oneNum; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroNum][j - oneNum] + 1)
            }
        }
    }
    return dp[m][n]
};
var strs = ["10", "0001", "111001", "1", "0"],
    m = 5,
    n = 3
var strs = ["10", "0", "1"],
    m = 1,
    n = 1
console.log(findMaxForm(strs, m, n))