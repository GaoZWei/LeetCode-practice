// debounce 防抖实现(某段时间,无论触发了多少次回调,只执行最后一次)
// 这个带有第一次不延迟

function debounce(fn, wait = 50, immidiate) {
    let timer = null
    // console.log(arguments); //[ƒ, 1000, true, callee: (...), Symbol(Symbol.iterator): ƒ]
    return function () {
        if (timer) clearTimeout(timer)
        if (immidiate && !timer) {
            fn.apply(this, arguments)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, wait)
    }
}

const betterFn = debounce(() => console.log('fn防抖执行了'), 1000, true)
document.addEventListener('scroll', betterFn)