// Promise.race解决超时问题
// https://www.bilibili.com/video/BV13P4y1V7TC?p=4
// https://xie.infoq.cn/article/d91fb7973892068d1e4bc9eb6  (为主)
// https://juejin.cn/post/6875152247714480136#heading-36

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 执行完成：成功")
        resolve('success')
    }, 1000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 执行完成：失败")
        reject('fail')
    }, 3000);
})
let p3 = 3

// Promise.race：
// 批处理 promise，返回 promise；
// 无论成功还是失败，谁快就返回谁；

//写法1 (https://www.bilibili.com/video/BV13P4y1V7TC?p=4)
Promise.myrace = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            var promise = promises[i]
            if (Object.prototype.toString.call(promise) == "[object Promise]") {
                promise.then(resolve, reject)
            } else {
                resolve(promise)
            }
        }
    })
}

//写法2  (https://xie.infoq.cn/article/d91fb7973892068d1e4bc9eb6 )
Promise.myrace1 = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            var promise = promises[i]
            if (promise && typeof promise.then === 'function') {
                promise.then(resolve, reject)
            } else {
                resolve(promise)
            }
        }
    })
}

// 写法3  (https://juejin.cn/post/6875152247714480136#heading-36)
Promise.myrace2 = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise).then((val) => {
                resolve(val)
            }, (err) => {
                reject(err);
            })
        });
    })
}


Promise.myrace2([p1, p2]).then((data) => {
    console.log('then', data);
}).catch((err) => {
    console.log('catch', err);
})