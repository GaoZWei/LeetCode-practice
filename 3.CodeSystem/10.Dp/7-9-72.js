// 72. 编辑距离 hard

// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

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
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1) //删除和增加一样,分别删除(2),替换(1),3种情况
            }
        }
    }
    return dp[m][n]
};

var word1 = "horse",
    word2 = "ros"
console.log(minDistance(word1, word2));