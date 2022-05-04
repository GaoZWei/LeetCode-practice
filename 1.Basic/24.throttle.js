// throttle节流函数实现

function Mythrottle(fn, wait) {
    var prev = 0
    return function () {
        var now = Date.now()
        if (now - prev >= wait) {
            prev = now
            fn.apply(this, arguments)
        }
    }
}

function b() {
    console.log('节流函数')
}
// var a = Mythrottle(() => console.log('节流函数'), 1000)
var a = Mythrottle(b, 1000)
setInterval(a, 10)