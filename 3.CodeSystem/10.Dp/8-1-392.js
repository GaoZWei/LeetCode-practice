// 392. 判断子序列
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。

//贪心更好while

//dp
var isSubsequence = function (s, t) {
    var m = s.length
    var n = t.length
    var dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = dp[i][j - 1] //比较特殊,i不需要移动,j向前移(j删除)
            }
        }
    }
    return dp[m][n] == m
};

var s = "abc",
    t = "ahbgdc"
console.log(isSubsequence(s, t));