// 516. 最长回文子序列
// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

//dp[i][j]：字符串s在[i, j]范围内最长的回文子序列的长度为dp[i][j]。
var longestPalindromeSubseq = function (s) {
    var n = s.length
    var dp = new Array(n).fill(0).map(x => new Array(n).fill(0))
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1
    }
    for (let i = n; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])   //两者取较大的
            }
        }
    }
    return dp[0][n - 1]
};

var s = "bbbab"
console.log(longestPalindromeSubseq(s));