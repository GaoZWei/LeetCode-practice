// debounce 防抖实现(某段时间,无论触发了多少次回调,只执行最后一次)
// 这个带有第一次不延迟

function debounce(fn, wait = 50, immidiate) {
    var timer = null //定时器id
    return function () {
        if (timer) clearInterval(timer)
        if (timer == null && immidiate) {
            fn.apply(this, arguments)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, wait)
    }
}

var betterFn = debounce(() => {
    console.log('防抖')
}, 1000, true)
window.addEventListener("scroll", betterFn)