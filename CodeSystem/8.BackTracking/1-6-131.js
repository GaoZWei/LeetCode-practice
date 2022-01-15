// 131. 分割回文串 (递归+动态规划)
// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

var judge = (s, left, right) => {
    while (left < right) {
        if (s[left] != s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

var partition = function (s) {
    var res = []
    var path = []
    var dfs = (start) => {
        if (start == s.length) {
            res.push(path.slice())
            return
        }
        for (let i = start; i < s.length; i++) {
            if (!judge(s, start, i)) continue
            path.push(s.substr(start, i - start + 1))
            // path.push(s.substring(start, i + 1))
            dfs(i + 1)
            path.pop()
        }
    }
    dfs(0)
    return res
};

var s = "aab"
console.log(partition(s))