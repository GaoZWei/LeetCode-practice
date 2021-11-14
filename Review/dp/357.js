// 357. 计算各个位数不同的数字个数(回溯+动态规划)
// 给定一个非负整数 n，计算各位数字都不同的数字 x 的个数，其中 0 ≤ x < 10n 。

//回溯
var countNumbersWithUniqueDigits = function (n) {
    var res = 0
    var tmp = []
    var dfs = (nth) => {
        if (nth == n) return
        for (let i = nth == 0 ? 1 : 0; i < 10; i++) { //key 从1开始
            if (tmp.includes(i)) continue
            tmp.push(i)
            res++
            dfs(nth + 1)
            tmp.pop()
        }
    }
    dfs(0)
    return ++res
};

//dp (排列) 数学公式相关
var countNumbersWithUniqueDigits = function (n) {
    if (n == 0) return 1
    var first = 10
    var second = 9 * 9
    var size = Math.min(n, 10)
    for (let i = 2; i <= size; i++) {
        first += second
        second *= 10 - i
    }
    return first
}
var n = 2
console.log(countNumbersWithUniqueDigits(n))