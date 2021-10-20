// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

//思路1: 回溯(深度优先搜索)
var letterCombinations = (digits) => {
    if (digits.length == 0) return []
    var res = []
    var map = {
        '2': "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    var dfs = (curStr, i) => {
        if (i > digits.length - 1) {
            res.push(curStr)
            return;
        }
        var letters = map[digits[i]]
        for (var letter of letters) {
            dfs(curStr + letter, i + 1)
        }
    }
    dfs('', 0)
    return res
};

//广度优先搜索
var letterCombinations = (digits) => {
    var n = digits.length
    if (n == 0) return []
    var map = {
        '2': "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    var queue = []
    queue.push('')
    for (let i = 0; i < n; i++) {
        var size = queue.length
        for (let j = 0; j < size; j++) {
            var curStr = queue.shift()
            var letters = map[digits[i]]
            for (let letter of letters) {
                queue.push(curStr + letter)
            }
        }
    }
    return queue
}

var digits = "23"
console.log(letterCombinations(digits))