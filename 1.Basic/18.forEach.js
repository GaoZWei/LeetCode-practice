// Array.prototype.forEach实现

// 实现方法与filter类似
var arr = [2, 3, 4, 5, 6]

Array.prototype.myForEach = function (fn, thisArgs) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw ('param is not function')
    }
    var self = this
    for (let i = 0; i < self.length; i++) {
        fn.call(thisArgs, self[i], i, self)
    }
}

var res = arr.myForEach((item) => {
    // return item * 2
    console.log(item);
})
console.log(res);