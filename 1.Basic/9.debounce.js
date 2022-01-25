// 防抖函数
// 函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。
// 这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。

// https://blog.csdn.net/tedsz1025/article/details/80527416

// 这种函数就是apply绑定作用域this和args!!!!

function debounce(fn, wait) {
    let timer = null
    return function () {
        let context = this //获取函数所在作用域this
        let args = arguments //取得传入参数
        // console.log('this' + this);
        // console.log("arguments" + arguments);
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        timer = setTimeout(() => {
            fn.apply(context, args)
        }, wait)
    }
}