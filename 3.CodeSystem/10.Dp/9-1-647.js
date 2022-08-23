// 647. 回文子串
// 给你一个字符串 s， 请你统计并返回这个字符串中 回文子串 的数目。

var countSubstrings = function (s) {
    var n = s.length
    var dp = new Array(n).fill(false).map(x => new Array(n).fill(false))
    var res = 0
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] == s[j]) {
                if (j - i <= 1) { //case1,case2: j与i相差小于1
                    res++
                    dp[i][j] = true
                } else if (dp[i + 1][j - 1]) { //case3:dp[i+1][j-1]是回文串
                    res++
                    dp[i][j] = true
                }
            }
        }
    }
    return res
};

//双指针
var countSubstrings = (s) => {
    var n = s.length
    var res = 0
    for (let i = 0; i < 2 * n - 1; i++) {
        var left = Math.floor(i / 2)
        var right = left + i % 2 //解决以奇数或者偶数为中心,向两侧扩散
        while (left >= 0 && right < n && s[left] == s[right]) {
            res++
            left--
            right++
        }
    }
    return res
}

var s = "abcba"
console.log(countSubstrings(s));