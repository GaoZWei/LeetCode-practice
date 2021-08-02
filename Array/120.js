// 三角形最小路径和
// 给定一个三角形 triangle， 找出自顶向下的最小路径和。
// 每一步只能移动到下一行中相邻的结点上。 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。 也就是说， 如果正位于当前行的下标 i， 那么下一步可以移动到下一行的下标 i 或 i + 1。

// 思路:
// 1.初始化二维数组
// 2.从下往上遍历
var minimumTotal = function (triangle) {
    var rows = triangle.length
    //1.初始化数组
    var dp = new Array(rows)
    for (let i = 0; i < rows; i++) {
        dp[i] = new Array(triangle[i].length)
    }
    // 2.从下往上遍历
    for (let i = rows - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (i == rows - 1) { //如果它是最后一行
                dp[i][j] = triangle[i][j]
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
            }
        }
    }
    return dp[0][0]
};


//降维
var minimumTotal = function (triangle) {
    const bottom = triangle[triangle.length - 1]
    // 初始化一维数组
    const dp = new Array(bottom.length)
    for (let i = 0; i < dp.length; i++) {
        dp[i] = bottom[i]
    }
    for (let i = dp.length - 2; i >= 0; i--) { //从倒数第二层开始遍历
        for (let j = 0; j < triangle[i].length; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }
    return dp[0]
}
var triangle = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]
console.log(minimumTotal(triangle))