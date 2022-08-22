// 115. 不同的子序列
// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

// dp[i][j]：以i-1为结尾的s子序列中出现以j-1为结尾的t的个数为dp[i][j]。
var numDistinct = function (s, t) {
    var m = s.length
    var n = t.length
    var dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0))
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] == t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] //两种情况: 考虑是否用了s[i-1]进行了匹配  
            } else {
                dp[i][j] = dp[i - 1][j]
            }
        }
    }
    return dp[m][n]
};


var s = "rabbbit",
    t = "rabbit"
console.log(numDistinct(s, t));