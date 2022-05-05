// Object.is实现
// 解决2个问题:
// +0 === -0  // true
// NaN === NaN // false

const is = (x, y) => {
    if (x === y) {
        //解决 +0 === -0 
        return x !== 0 || 1 / x === 1 / y
    } else {
        //解决 NaN === NaN 
        return x !== x && y !== y
    }
}
console.log(NaN !== NaN); //true
console.log(is(+0, -0)); //false
console.log(is(NaN, NaN)); //true
console.log(is(1, 2)); //false