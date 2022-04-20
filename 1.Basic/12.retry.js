// retry函数
// https://www.shangmayuan.com/a/275159841c704877b3038c67.html
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('sever unavailable')
        }, 500)
    })
}

var retry = function (fn, times, delay) {
    var err = null
    return new Promise(function (resolve, reject) {
        var attempt = function () {
            fn().then(resolve)
                .catch(function (err) {
                console.log(`attempt #${times} failed`);
                if (0 == times) {
                    reject(err)
                } else {
                    times--
                    setTimeout(function () {
                        attempt()
                    }, delay)
                }
            })
        }
        attempt()
    })
}

retry(fetchData, 3, 100)