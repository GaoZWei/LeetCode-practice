// Function.prototype.call实现
// 就是在对象上创建fn,执行这个函数

var obj = {
    name: '123'
}

// es5
Function.prototype.myCall = function (obj) {
    obj ? Object(obj) : window
    obj.fn = this
    var args = []
    for (let i = 1; i < arguments.length; i++) {
        args.push("arguments[" + i + "]")
    }
    var result = eval("obj.fn(" + args + ")")
    delete obj.fn
    return result
}

//es6
Function.prototype.myCall = function (obj) {
    obj ? Object(obj) : window
    obj.fn = this
    var args = [...arguments].slice(1)
    var result = obj.fn(...args)
    delete obj.fn
    return result
}


function a() {
    console.log(this.name);
}
a.myCall(obj)