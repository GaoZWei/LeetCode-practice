// Array.prototype.filter函数实现
// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 

// Array.prototype.filter((item, index, data) => {}, thisArgs)

// https://www.bilibili.com/video/BV1LK4y1W7cS?spm_id_from=333.337.search-card.all.click
var arr = [3, 4, 5, 6, 7]

Array.prototype.myfilter = function (fn, thisArgs) {
    if (Object.prototype.toString.call(fn) !== "[object Function]") {
        throw ('error in params')
    }
    var self = this
    var res = []
    for (let i = 0; i < self.length; i++) {
        if (fn.call(thisArgs, self[i], i, self)) {
            res.push(arr[i])
        }
    }
    return res
}

var res = arr.myfilter((item, index, data) => {
    return item > 4
})
console.log(res);