// 5.实现一个repeat函数，
// const repeatFunc = repeat(console.log,4,3000),调用repeatFunc('hello')
// 会打印4次hello，每次间隔3秒
// https://blog.csdn.net/weixin_45284354/article/details/114369294

// function repeat(func, times, wait) {
//     return async function (...arg) {
//         for (let i = 0; i < times; i++) {
//             await new Promise(function (res, rej) {
//                 setTimeout(() => {
//                     func.apply(this, arg)
//                     res()
//                 }, wait);
//             })
//         }
//     }
// }

function repeat(fn, times, wait) {
    return async function (...arg) {
        for (let i = 0; i < times; i++) {
            await new Promise(function (res, rej) {
                setTimeout(() => {
                    fn.apply(this, arg)
                    res()
                }, wait)
            })
        }
    }
}

const repeatFunc = repeat(console.log, 4, 3000)
repeatFunc('hello')