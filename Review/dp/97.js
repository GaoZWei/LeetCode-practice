// 97. 交错字符串(递归+记忆化递归+动态规划)
// 给定三个字符串 s1、s2、s3，请你帮忙验证 s3 是否是由 s1 和 s2 交错 组成的。

//递归
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false
    var check = (i, j, k) => {
        if (k == s3.length) return true
        var isValid = false
        if (i < s1.length && s1[i] == s3[k]) {
            isValid = check(i + 1, j, k + 1)
        }
        if (j < s2.length && s2[j] == s3[k]) {
            isValid = isValid || check(i, j + 1, k + 1)
        }
        return isValid
    }
    return check(0, 0, 0)
};


//记忆化递归
var isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false
    var memory = new Array(s1.length + 1)
    for (let i = 0; i < memory.length; i++) {
        memory[i] = new Array(s2.length + 1)
    }
    var check = (i, j, k) => {
        if (memory[i][j] != null) return memory[i][j]
        if (k == s3.length) return memory[i][j] = true
        var isValid = false
        if (i < s1.length && s1[i] == s3[k]) {
            isValid = check(i + 1, j, k + 1)
        }
        if (j < s2.length && s2[j] == s3[k]) {
            isValid = isValid || check(i, j + 1, k + 1)
        }
        return memory[i][j] = isValid
    }
    return check(0, 0, 0)
}

//dp
var isInterleave = function (s1, s2, s3) {
    var m = s1.length,
        n = s2.length,
        k = s3.length
    if (m + n != k) return false
    var dp = new Array(m + 1)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n + 1)
    }

    dp[0][0] = true
    //初始化
    for (let i = 1; i <= m; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1]
    }
    for (let i = 1; i <= n; i++) {
        dp[0][i] = dp[0][i - 1] && s2[i - 1] == s3[i - 1]
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i - 1 + j]) || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1])
        }
    }
    return dp[m][n]
};

var s1 = "aabcc",
    s2 = "dbbca",
    s3 = "aadbbcbcac"
console.log(isInterleave(s1, s2, s3))