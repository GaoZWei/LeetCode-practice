// 使用 Promise.all 处理并行请求+限制失败数量
// https://www.bilibili.com/video/BV1L64y1Y7Hi?p=2  (不错)

var isPromise = function isPromise(x) {
    if (x != null && (typeof x === 'object' || typeof x === "function")) {
        //这是对象
        var then;
        try {
            then = x.then
        } catch (err) {
            return false
        }
        if (typeof then == 'function') return true
    }
    return false
}

Promise.Myall = function (promises) {
    if (!Array.isArray(promises)) throw new TypeError('promises must be array')
    var n = 0
    var values = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            var promise = promises[i]
            if (!isPromise(promise)) promise = Promise.resolve(promise)
            promise.then(function onfulfilled(value) {
                    n++
                    values[i] = value
                    if (n >= promises.length) return resolve(values)
                })
                .catch(function (reason) {
                    return reject(reason)
                })
        }
    })
}

//失败数量限制设置
// limit为2,但是1个失败,整体成功,将其设置为null
Promise.MyallLimit = function (promises, limit) {
    if (!Array.isArray(promises)) throw new TypeError('promises must be array')
    limit = +limit
    if (isNaN(limit)) limit = 1
    if (limit < 1 || limit > promises.length) throw new RangeError('limit invalid')

    var n = 0
    var m = 0
    var values = []
    var reasons = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            var promise = promises[i]
            if (!isPromise(promise)) promise = Promise.resolve(promise)
            promise.then(function onfulfilled(value) {
                    n++
                    values[i] = value
                    if (n >= promises.length) resolve(values)
                })
                .catch(function (reason) {
                    m++
                    reasons.push(reason)
                    if (m == limit) {
                        reject(reasons)
                    } else {
                        n++
                        values[i] = null
                        if (n >= promises.length) resolve(values)
                    }
                })
        }
    })
}


let p1 = new Promise(resolve => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
})
let p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve(2)
    }, 2000)
})

let p3 = Promise.reject(3)
let p4 = Promise.reject(4)
let p5 = 5


// Promise.Myall([p1, p2, p5]).then(values => {
//     // 集合中所有的promise实例都是成功整体才是成功
//     // 集合中有一个非promise实例,默认会处理为成功的promise,值还是这个值
//     // values按照之前集合的顺序,存储promise成功的结果
//     console.log(values);
// }).catch(reason => {
//     console.log(reason);
// })


Promise.MyallLimit([p1, p3, p4, p5], 2).then(values => {
    console.log(values);
}).catch(reason => {
    console.log(reason);
})