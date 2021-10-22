// 22. 括号生成
// 数字 n 代表生成括号的对数， 请你设计一个函数， 用于能够生成所有可能的并且 有效的 括号组合。
// 有效括号组合需满足： 左括号必须以正确的顺序闭合。

//回溯
var generateParenthesis = function (n) {
    var res = []
    var dfs = (lRemain, rRemain, str) => {
        if (str.length == 2 * n) {
            res.push(str)
            return
        }
        //两个约束
        //1.只要左括号有剩余, 就可以选左括号
        if (lRemain > 0) {
            dfs(lRemain - 1, rRemain, str + "(")
        }
        //2.只有右括号剩余 > 左括号剩余, 才可以选择右括号
        if (rRemain > lRemain) {
            dfs(lRemain, rRemain - 1, str + ")")
        }
    }
    dfs(n, n, "")
    return res
};
var n = 3
console.log(generateParenthesis(n))