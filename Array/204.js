// 计算质数
// 统计所有小于非负整数 n 的质数的数量。

// 厄拉多塞筛法
// 每计算一个数, 都把他的倍数去掉, 并用count计数, 遍历即可
var countPrimes = function (n) {
    var arr = []
    var count = 0 //计数
    for (let i = 2; i < n; i++) {
        if (!arr[i]) { //没被标记就是质数
            count++
            for (let j = i * 2; j < n; j += i) {
                arr[j] = true
            }
        }
    }
    return count
};

var n = 14
console.log(countPrimes(n))