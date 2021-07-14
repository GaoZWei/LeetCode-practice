// 螺旋矩阵2
// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，
// 且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

// 输入：n = 3
// 输出：[[1,2,3],[8,9,4],[7,6,5]]


//思路1:和题意不符!!!
// 生成初始矩阵
// 生成螺旋矩阵
var generateMatrix = function (n) {
    // 生成初始矩阵
    var ArrNums = n * n
    const arr = []
    var tmp = []
    for (let i = 1; i <= ArrNums; i++) {
        tmp.push(i)
        if (i % n == 0) {
            arr.push(tmp)
            tmp = []
        }
    }
    // 下面是生成螺旋矩阵
    var left = 0;
    var right = n - 1
    var top = 0;
    var bottom = n - 1
    var res = []
    var tmp2 = []
    for (let i = left; i < right; i++) {

    }

    return arr
};

//与之前的类似
var generateMatrix = function (n) {
    var nums = n * n
    var res = new Array(n)
    for (let i = 0; i < n; i++) {
        res[i] = new Array(n)
        // res.push(tmp) 不可
    }
    var left = 0,
        right = n - 1,
        top = 0,
        bottom = n - 1,
        num = 1
    while (num <= nums) {
        for (let i = left; i <= right; i++) {
            res[top][i] = num
            num++
        }
        top++
        for (let i = top; i <= bottom; i++) {
            res[i][right] = num
            num++
        }
        right--
        for (let i = right; i >= left; i--) {
            res[bottom][i] = num
            num++
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            res[i][left] = num
            num++
        }
        left++
    }
    return res
}
var n = 3
console.log(generateMatrix(n))