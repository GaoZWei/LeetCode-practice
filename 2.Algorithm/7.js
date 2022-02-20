// 判断是否是素数
// http://c.biancheng.net/view/498.html

function isPrime(num) {
    // 不是数字或者数字小于2
    if (typeof num !== "number" || !Number.isInteger(num)) { // Number.isInterget 判断是否为整数
        return false;
    }
    //2是质数
    if (num == 2) {
        return true;
    } else if (num % 2 == 0) { //排除偶数
        return false;
    }
    //依次判断是否能被奇数整除，最大循环为数值的开方
    var squareRoot = Math.sqrt(num);
    //因为2已经验证过，所以从3开始；且已经排除偶数，所以每次加2
    for (var i = 3; i <= squareRoot; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//方法1
// 直接除以  2到n-1,看能不能整除

//方法2
function isPrime(num) {
    if (typeof num != "number" || !Number.isInteger(num)) return false
    if (num == 1 || num == 2) {
        return true
    } else if (num % 2 == 0) {
        return false
    }
    var sqrtNum = Math.sqrt(num)
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(21));