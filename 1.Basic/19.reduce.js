// Array.prototype.reduce实现
// https://www.bilibili.com/video/BV1Q5411E7bb?spm_id_from=333.337.search-card.all.click

// 如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。
// 否则，数组索引为 0 的元素将被作为初始值 initialValue，
// 迭代器将从第二个元素开始执行（索引为 1 而不是 0）。

var arr = [1, 2, 3, 4, 5]

Array.prototype.myReduce = function (fn, initialVal) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw new Error('param is not function')
    }

    var self = this
    var initIndex = arguments.length === 1 ? 1 : 0 //有坑,不能用undefined,因为可以传进去undefined,会返回NAN
    var acc = arguments.length === 1 ? self[0] : initialVal

    for (let i = initIndex; i < self.length; i++) {
        acc = fn(acc, self[i], i, self)
    }
    return acc
}

var res = arr.myReduce((pre, cur) => {
    return pre + cur
}, 0)
console.log(res);