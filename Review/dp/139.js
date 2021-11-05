// 139. 单词拆分
// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典，判定 s 是否可以由空格拆分为一个或多个在字典中出现的单词。
//动态规划
var wordBreak = function (s, wordDict) {
    var n = s.length
    var set = new Set(wordDict)

    var dp = new Array(n + 1).fill(false)
    dp[0] = true

    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            var suffix = s.slice(j, i)
            if (set.has(suffix) && dp[j]) {
                dp[i] = true
                break
            }
        }
    }
    return dp[n]
}

var s = "leetcode"
var wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict))