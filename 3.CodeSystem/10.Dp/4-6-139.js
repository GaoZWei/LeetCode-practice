// 139. 单词拆分
// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

// 子串:先背包,再物品
// 若是先物品,在背包,需要容器存物品
const wordBreak = (s, wordDict) => {
    var dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let i = 0; i <= s.length; i++) {
        for (let j = 0; j < wordDict.length; j++) {
            if (i >= wordDict[j].length) {
                //是否有这个子串  && 子串之前的是否存在
                if (s.slice(i - wordDict[j].length, i) == wordDict[j] && dp[i - wordDict[j].length]) {
                    dp[i] = true
                }
            }
        }
    }
    return dp[s.length]
}

var s = "leetcode",
    wordDict = ["leet", "code"]
console.log(wordBreak(s, wordDict));