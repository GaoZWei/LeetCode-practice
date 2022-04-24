// Function.prototype.bind实现

// 要解决4个问题
// 1.指向this
// 2.返回一个函数
// 3.可以传入参数
// 4.柯里化

Function.prototype.myBind = function (obj) {
    var self = this
    var arg1 = Array.prototype.slice.call(arguments, 1)
    return function () {
        var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(obj, arg1.concat(bindArgs))
    }
}

//解决new的问题
Function.prototype.myBind = function (obj) {
    var self = this
    var arg1 = Array.prototype.slice.call(arguments, 1)
    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments) //bindArgs 返回函数的参数
        return self.apply(
            this instanceof fBound ? this : obj, //找this
            arg1.concat(bindArgs)
        )
    }
    fBound.prototype = this.prototype //继承绑定函数的原型中的值  (会有直接修改fBound.prototype问题)
    return fBound
}

//最终版
Function.prototype.myBind = function (obj) {
    if (typeof this != "function") {
        throw new Error("bind的不是函数")
    }
    var self = this
    var arg1 = Array.prototype.slice.call(arguments, 1)
    var fNOP = function () {}
    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments) //bindArgs 返回函数的参数
        return self.apply(
            this instanceof fBound ? this : obj, //找this
            arg1.concat(bindArgs)
        )
    }
    fNOP.prototype = this.prototype //原型式继承
    fBound.prototype = new fNOP()
    return fBound
}

//ES6
Function.prototype.myBind = function (obj, ...args) {
    if (typeof this != "function") {
        throw new Error("bind的不是函数")
    }
    var self = this
    return function F() {
        if (this instanceof F) {
            return new self(...args, ...arguments)
        }
        return self.apply(obj, [...args, ...arguments])
    }
}

var value = 2;
var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

var bindFoo = bar.myBind(foo, 'Jack'); // bind2
var obj = new bindFoo(20); // 返回正确
// undefined
// Jack
// 20

obj.habit; // 返回正确
// shopping

obj.friend; // 返回正确
// kevin

obj.__proto__.friend = "Kitty"; // 修改原型

console.log(bar.prototype.friend); // kevin