//自己实现promise.all
let p1 = new Promise((resolve, reject) => {
    resolve(1)
})
let p2 = new Promise((resolve, reject) => {
    resolve(2)
})
let p3 = Promise.resolve(3)
let p4 = Promise.reject(4)
let p5 = Promise.reject(5)
let p6 = 6

function isPromise(x) {
    if (x != null && (typeof x == "function" || typeof x == "object")) {
        var then;
        try {
            then = x.then
        } catch (err) {
            return false
        }
        if (typeof then == "function") return true
    }
    return false
}


Promise.myAll = function (promises) {
    if (!Array.isArray(promises)) throw new TypeError('promises must be Array')
    var n = 0
    var values = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            var promise = promises[i]
            if (!isPromise(promise)) promises = Promise.resolve(promise)
            promise.then((value) => {
                    n++
                    values[i] = value
                    if (n >= promises.length) return resolve(values)
                })
                .catch((err) => {
                    return reject(err)
                })
        }
    })

}

Promise.myAllLimit = function (promises, limit) {
    if (!Array.isArray(promises)) throw new TypeError('promises must be Array')
    limit = +limit
    if (!isNaN(limit)) limit = 1
    if (limit < 1 || limit > promises.length) throw new RangeError("limit invalid")

    var n = 0
    var m = 0
    var values = []
    var reasons = []
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            var promise = promises[i]
            if (!isPromise(promise)) promises = Promise.resolve(promise)
            promise.then((value) => {
                    n++
                    values[i] = value
                    if (n >= promises.length) resolve(values)
                })
                .catch((reason) => {
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


// Promise.myAll([p1, p2, p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })


Promise.myAllLimit([p1, p2, p3, p4, p5], 2).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})