// 写法1
function currying(fn, length) {
    length = length || fn.length; //fn 参数的长度
    console.log(fn.length);
    return function (...args) { // 注释 2
        console.log(...args);
        return args.length >= length // 注释 3
            ?
            fn.apply(this, args) // 注释 4
            :
            currying(fn.bind(this, ...args), length - args.length) // 递归操作
    }
}

//写法2
var currying = fn =>
    judge = (...args) =>
    args.length >= fn.length ?
    fn(...args) :
    (...arg) => judge(...args, ...arg)


//写法1
function currying(fn, length) {
    length = length || fn.length
    return function (...args) {
        return args.length >= length ?
            fn.apply(this, args) :
            currying(fn.bind(this, ...args), length - args.length)
    }
}

//写法2
function currying(fn) {
    return judge = function (...args) {
        return args.length >= fn.length ?
            fn(...args) :
            (arg) => judge(...args, arg)
    }
}

var fn1 = currying(function (a, b, c) {
    console.log([a, b, c]);
})
// fn1("a", "b", "c") // ["a", "b", "c"]
fn1("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]