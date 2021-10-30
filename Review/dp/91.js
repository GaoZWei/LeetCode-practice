// 91. 解码方法(动态规划)
// 给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

var numDecodings = function (s) {
    if (!s || s[0] == 0) return 0
    var len = s.length
    var dp = new Array(len + 1).fill(0)
    dp[0] = 1 //只初始化用
    dp[1] = s[0] === "0" ? 0 : 1
    for (let i = 2; i <= len; i++) {
        if (s[i - 1] != "0") {
            dp[i] += dp[i - 1]
        }
        if (s[i - 2] == "1" || (s[i - 2] == "2" && s[i - 1] >= 0 && s[i - 1] <= 6)) {
            dp[i] += dp[i - 2]
        }
    }
    return dp[len]
};
var numDecodings = function (s) {
    if (s == null || s.length == 0) {
        return 0;
    }
    var len = s.length
    var dp = new Array(len + 1).fill(0)
    dp[0] = 1 //只初始化用
    dp[1] = s[0] === "0" ? 0 : 1
    for (let i = 2; i <= len; i++) {
        var one = s.slice(i - 1, i)
        var two = s.slice(i - 2, i)
        if (two >= 10 && two <= 26) { //直接用数字
            dp[i] += dp[i - 2]
        }
        if (one >= 1 && one <= 9) {
            dp[i] += dp[i - 1]
        }
    }
    return dp[len]
}
var s = "226"
console.log(numDecodings(s))