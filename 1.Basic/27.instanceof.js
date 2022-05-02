// instanceof 实现

function myInstanceof(left, right) {
    if (typeof left != 'object' || left == null)
        return false
    var proto = Object.getPrototypeOf(left)
    while (true) {
        if (proto === null) return false
        if (proto === right.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

function A() {}
var a = new A()
console.log(myInstanceof(a, A))