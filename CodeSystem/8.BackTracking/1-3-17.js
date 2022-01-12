// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

//正经回溯
var letterCombinations = (digits) => {
    var len = digits.length
    if (!len) return []
    var map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    if (len == 1) return map[digits].split("")

    var res = [],
        path = []
    var dfs = (digits, index) => {
        if (path.length == len) {
            res.push(path.join(""))
            return
        }
        var letters = map[digits[index]]
        for (let letter of letters) {
            path.push(letter)
            dfs(digits, index + 1)
            path.pop()
        }
    }
    dfs(digits, 0)
    return res
}

var digits = "23"
console.log(letterCombinations(digits))