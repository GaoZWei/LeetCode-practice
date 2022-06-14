// 93. 复原 IP 地址
// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

var restoreIpAddresses = function (s) {
    var res = []
    var path = []
    var dfs = (i) => {
        var len = path.length
        if (len > 4) return
        if (len == 4 && i == s.length) {
            res.push(path.join("."))
            return
        }
        for (let j = i; j < s.length; j++) {
            var str = s.substr(i, j - i + 1)
            if (str.length > 4 || +str > 255) break
            if (str.length > 1 && str[0] == "0") break
            path.push(str)
            dfs(j + 1)
            path.pop()
        }
    }
    dfs(0)
    return res
};

var s = "25525511135"
console.log(restoreIpAddresses(s))