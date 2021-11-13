// 338. 比特位计数(动态规划)
// 给你一个整数 n， 对于 0 <= i <= n 中的每个 i，
// 计算其二进制表示中 1 的个数， 返回一个长度为 n + 1 的数组 ans 作为答案。

// Brain Kernighan
var countOnes = (x) => {
    var count = 0
    while (x > 0) {
        x = x & (x - 1)
        count++
    }
    return count
}

var countBits = function (n) {
    var ans = new Array(n + 1).fill(0)
    for (let i = 0; i <= n; i++) {
        count = countOnes(i)
        ans[i] = count
    }
    return ans
};

//dp
var countBits = function (n) {
    var ans = new Array(n + 1).fill(0)
    for (let i = 0; i <= n; i++) {
        ans[i] = ans[i >> 1] + (i % 2)
    }
    return ans
}

var n = 5
console.log(countBits(n))