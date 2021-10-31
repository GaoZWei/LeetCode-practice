// 96. 不同的二叉搜索树(动态规划)
// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？
// 返回满足题意的二叉搜索树的种数。

//动态规划
var numTrees = (n) => {
    var dp = new Array(n + 1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= i - 1; j++) {
            dp[i] += dp[j] * dp[i - 1 - j]
        }
    }
    return dp[n]
}
//递归
var numTrees = (n) => {
    if (n == 0 || n == 1) return 1
    var num = 0
    for (let i = 0; i <= n - 1; i++) {
        num += numTrees(i) * numTrees(n - i - 1)
    }
    return num
}
var n = 3
console.log(numTrees(n))