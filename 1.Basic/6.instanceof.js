//实现instanceof方法

// Object.getPrototypeOf(obj1)==obj1.__proto__
function myInstanceof(left, right) {
    let proto = Object.getPrototypeof(left)
    let prototype = right.prototype
    while (true) {
        if (!proto) return false
        if (proto == prototype) return true
        proto = Object.getPrototypeof(proto)
    }
}
