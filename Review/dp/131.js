// 131. 分割回文串 (递归+动态规划)
// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

//递归
//判断是否是回文串
var judge = (s, i, j) => {
    while (i < j) {
        if (s[i] != s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}
var partition = function (s) {
    var res = []
    var m = s.length
    var dfs = (tmp, start) => {
        if (start == s.length) {
            res.push(tmp.slice())
            return
        }
        for (let i = start; i < m; i++) {
            if (judge(s, start, i)) {
                tmp.push(s.substring(start, i + 1))
                dfs(tmp, i + 1)
                tmp.pop()
            }
        }
    }
    dfs([], 0)
    return res
};

//记忆化递归
var judge = (s, i, j, memory) => {
    while (i < j) {
        if (s[i] != s[j]) {
            memory[i][j] = false
            return false
        }
        i++
        j--
    }
    return true
}

var partition = function (s) {
    var m = s.length
    var memory = new Array(m)
    for (let i = 0; i < m; i++) {
        memory[i] = new Array(m)
    }
    // console.log(memory)
    var res = []
    var dfs = (tmp, start) => {
        if (start == m) {
            res.push(tmp.slice())
            return
        }
        for (let i = start; i < m; i++) {
            if (memory[start][i] == false) {
                return false
            }
            if (memory[start][i] || judge(s, start, i, memory)) {
                tmp.push(s.substring(start, i + 1))
                dfs(tmp, i + 1)
                tmp.pop()
            }
        }
    }
    dfs([], 0)
    return res
}



//动态规划预处理+递归
var partition = function (s) {
    var m = s.length
    var dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(m).fill(true)
    }
    for (let i = m - 1; i >= 0; i--) {
        for (let j = i + 1; j < m; j++) {
            dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1]
        }
    }
    var res = []
    var tmp = []
    var dfs = (start) => {
        if (start == m) {
            res.push(tmp.slice())
            return
        }
        for (let i = start; i < m; i++) {
            if (dp[start][i]) {
                tmp.push(s.slice(start, i + 1))
                dfs(i + 1)
                tmp.pop()
            }
        }
    }
    dfs(0)
    return res
}
var s = "aab"
console.log(partition(s))