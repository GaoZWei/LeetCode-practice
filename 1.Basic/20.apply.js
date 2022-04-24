// Function.prototype.apply实现

var obj = {
    name: "gzw"
}

// es5
Function.prototype.myApply = function (obj, arr) {
    obj = obj ? Object(obj) : window
    obj.fn = this
    var result
    if (!arr) {
        result = obj.fn()
    } else {
        var args = []
        for (let i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']')
        }
        result = eval('obj.fn(' + args + ')')
        // console.log(args.toString());  //字符串拼接,自动调用toString方法
    }
    delete obj.fn
    return result
}

// es6
Function.prototype.myApply = function (obj, arr) {
    obj = obj ? Object(obj) : window
    obj.fn = this
    var result
    if (!arr) {
        result = obj.fn()
    } else {
        var args = [...arr]
        result = obj.fn(...args)
    }
    delete obj.fn
    return result
}


function a(age, sex) {
    console.log(this.name);
    console.log(age, sex);
}
a.myApply(obj, [14, 'man'])