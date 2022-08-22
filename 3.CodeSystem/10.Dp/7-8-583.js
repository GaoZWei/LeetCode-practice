// 583. 两个字符串的删除操作
// 给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

// way1:最大公共子序列,再干掉即可

// way2: 正常删除
var minDistance = function (word1, word2) {
    var m = word1.length
    var n = word2.length
    var dp = new Array(m + 1).fill(0).map(x => new Array(n + 1).fill(0))
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 2)
            }
        }
    }
    return dp[m][n]
};

var word1 = "sea",
    word2 = "eat"

console.log(minDistance(word1, word2));