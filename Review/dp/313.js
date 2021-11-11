// 313. 超级丑数(动态规划)
// 超级丑数 是一个正整数，并满足其所有质因数都出现在质数数组 primes 中。
// 给你一个整数 n 和一个整数数组 primes ，返回第 n 个 超级丑数 。

var nthSuperUglyNumber = function (n, primes) {
    var dp = new Array(n + 1).fill(1)
    var map = new Map()
    var nums = []
    for (let i = 0; i < primes.length; i++) {
        map.set(primes[i], 1)
    }
    console.log(map)
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < primes.length; j++) {
            dp[i] = Math.min(dp[i], primes[j] * map.get(primes[j]))
            if (dp[i] == primes[j] * map.get(primes[j])) {
                map.set(primes[j], map.get(primes[j]) + 1)
            }
        }
    }
    return dp[n]
};


var nthSuperUglyNumber = function (n, primes) {
    var dp = new Array(n + 1).fill(1)
    var pointers = new Array(primes.length).fill(1)
    var nums = []
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < primes.length; j++) {
            nums[j] = primes[j] * dp[pointers[j]]
        }
        dp[i] = Math.min(...nums)

        for (let k = 0; k < nums.length; k++) {
            if (nums[k] == dp[i]) {
                pointers[k]++
            }
        }
        nums = []
    }
    return dp[n]
};

var n = 12,
    primes = [2, 7, 13, 19]
console.log(nthSuperUglyNumber(n, primes))