// 给定两个整数 n 和 k， 返回 1...n 中所有可能的 k 个数的组合。
// 你可以按任何顺序返回答案。
// 输入: n = 4, k = 2
// 输出:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]
var combine = function (n, k) {
    var arr = []
    var tmp = []
    const dfs = (state) => {
        if (tmp.length == k) {
            arr.push(tmp.slice())
            return
        }
        for (let i = state; i <= n; i++) {
            tmp.push(i)
            dfs(i + 1) //传入后面的数就可以
            tmp.pop()
        }
    }
    dfs(1);
    return arr
};

//思路2:利用组合公式
var combine = function (n, k) {
    var arr = []
    const dfs = (n, k, tmp) => {
        if (n < k || k == 0) {
            if (k == 0) {
                arr.push(tmp.slice())
            }
            return
        }
        dfs(n - 1, k - 1, tmp.concat(n))
        dfs(n - 1, k, tmp)
    }
    dfs(n, k, [])
    return arr
}

var n = 4,
    k = 2

console.log(combine(n, k))