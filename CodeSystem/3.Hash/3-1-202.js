// 202. 快乐数
// 编写一个算法来判断一个数 n 是不是快乐数。
// 「快乐数」定义为：
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果 可以变为  1，那么这个数就是快乐数。
// 如果 n 是快乐数就返回 true ；不是，则返回 false 。

// dfs+字符串变换
var isHappy = function (n) {
    var set = new Set()
    var dfs = (n) => {
        var nstr = n.toString()
        var sum = 0
        for (let a of nstr) {
            num = parseInt(a)
            sum += (num * num)
        }
        if (set.has(sum)) {
            return false
        } else if (sum == 1) {
            return true
        } else {
            set.add(sum)
            return dfs(sum)
        }
    }
    return dfs(n)
};

//set+while
var getSum = (n) => {
    var sum = 0
    while (n) {
        sum += (n % 10) ** 2
        n = Math.floor(n / 10)
    }
    return sum
}
var isHappy = function (n) {
    var set = new Set()
    while (n != 1 && !set.has(n)) {
        set.add(n)
        n = getSum(n)
    }
    return n == 1
}


var n = 19
console.log(isHappy(n))