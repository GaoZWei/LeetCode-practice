// 1143. 最长公共子序列
// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

var longestCommonSubsequence = function (text1, text2) {
    var m = text1.length
    var n = text2.length
    var dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1 //dp[i][j]表示i-1 j-1之前最长的公共子序列长度
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[m][n]
};

var text1 = "abcde",
    text2 = "ace"
console.log(longestCommonSubsequence(text1, text2));