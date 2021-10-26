// 5. 最长回文子串 (动态规划)
// 给你一个字符串 s，找到 s 中最长的回文子串。

//中心发散
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    var res = ''
    //箭头函数属于匿名函数，匿名函数是要通过赋值语句赋值给变量，这个赋值的过程是在代码执行阶段进行的，不是在声明阶段，所以没有函数声明提升的特性。
    var dfs = (left, right) => {
        while (left > 0 && right < s.length && s[left] == s[right]) {
            left--
            right++
        }
        if ((right - 1) - (left + 1) + 1 > res.length) {
            res = s.slice(left + 1, right)
        }
    }
    for (let i = 0; i < s.length; i++) {
        dfs(i, i) //奇数
        dfs(i, i + 1) //偶数
    }
    return res
}

//动态规划
var longestPalindrome = function (s) {
    var n = s.length
    var res = ''
    var dp = new Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(0)
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1]) //核心
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1)
            }
        }
    }
    return res
}
var s = "babad"
console.log(longestPalindrome(s))