// Array.prototype.map实现

// 实现方法与filter类似
var arr = [2, 3, 4, 5, 6]

Array.prototype.myMap = function (fn, thisArgs) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw ('param is not function')
    }
    var self = this
    var res = []
    for (let i = 0; i < self.length; i++) {
        res.push(fn.call(thisArgs, self[i], i, self))
    }
    return res
}

var res = arr.myMap((item) => {
    return item * 2
})
console.log(res);