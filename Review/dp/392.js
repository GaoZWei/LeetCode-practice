// 392. 判断子序列(动态规划)
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

var isSubsequence = function (s, t) {
    var i = 0,
        j = 0
    while (i < s.length && j < t.length) {
        if (s[i] == t[j]) {
            i++
            j++
        } else {
            j++
        }
    }
    return i == s.length
};

//动态规划
var isSubsequence = function (s, t) {
    var m = s.length
    var n = t.length
    var dp = new Array(m + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1).fill(0)
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = dp[i][j - 1]
            }
        }
    }
    return dp[m][n] == m
}
var s = "abc",
    t = "ahbgdc"
var s = "axc",
    t = "ahbgdc"
var s = "b",
    t = "c"
console.log(isSubsequence(s, t))