// 最长公共子序列
const longestCommonSubsequence = (text1, text2) => {
    // let dp = Array.from(Array(text1.length + 1), () => Array(text2.length + 1).fill(0));
    var dp = new Array(text1.length + 1)
    for (let i = 0; i <= text1.length; i++) {
        dp[i] = new Array(text2.length + 1).fill(0)
    }
    for (let i = 1; i <= text1.length; i++) {
        for (let j = 1; j <= text2.length; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[text1.length][text2.length];
};
var text1 = "abcde",
    text2 = "ace"
console.log(longestCommonSubsequence(text1, text2));