// catch异常穿透
// 当使用.catch时， 会默认为没有指定失败状态回调函数的.then添加一个失败回调函数（ 上文中有具体函数代码）。
// .catch所谓的异常穿透并不是一次失败状态就触发catch, 而是一层一层的传递下来的。
// 异常穿透的前提条件是所有的.then都没有指定失败状态的回调函数。
// 如果.catch前的所有.then都指定了失败状态的回调函数，.catch就失去了意义

// new Promise((resolve, reject) => {
//         reject(1) //失败状态
//     })
//     .then(value => {
//         console.log('成功', value);
//     }, reason => {
//         console.log('失败', reason); //失败 1；无返回值、默认返回成功状态，状态值为undefined
//     })
//     .then(value => {
//         console.log('成功', value); //成功 undefined
//     }, reason => {
//         console.log('失败', reason);
//     })

// new Promise((resolve, reject) => {
//         reject(1) //失败状态
//     })
//     .then(value => {
//         console.log('成功', value);
//     }, reason => {
//         console.log('失败', reason); //失败 1；无返回值、默认返回成功状态，状态值为undefined
//     })
//     .then(value => {
//         console.log('成功', value); //成功 undefined
//     }, reason => {
//         console.log('失败', reason);
//     })
//     .catch(reason => console.log('失败', reason)) //这里增加catch，但是不会走到这里来

// new Promise((resolve, reject) => {
//         reject(1) //失败状态
//     })
//     .then(value => {
//         console.log('成功', value); //没有指定失败的回调函数，不执行代码，去往下一级寻找失败状态回调函数
//     })
//     .then(value => {
//         console.log('成功', value); //没有指定失败的回调函数，不执行代码，去往下一级寻找失败状态回调函数
//     })
//     .catch(reason => console.log('失败', reason)) //这里执行了，失败 1；
// //打印结果
// //失败 1；

// //当then方法中没有指定失败的回调函数时，
// //使用.catch会默认为没有指定失败回调函数的.then指定失败回调函数为：
// reason => {
//     throw reason //注意不是return reason 而是throw reason ；throw保证了返回结果为失败
// }

// 当一个promise是reject状态，但是没有失败回调，也没有写catch捕获，那么系统会默认捕获

new Promise((resolve, reject) => {
        reject(1) //失败状态
    })
    .then(value => {
        console.log('成功', value);
    })
    .then(value => {
        console.log('成功', value); //成功 undefined
    })
    .catch(reson => {
        throw reson
    })

// 当使用.catch时， 会默认为没有指定失败状态回调函数的.then添加一个失败回调函数（ 上文中有具体函数代码）。
// .catch所谓的异常穿透并不是一次失败状态就触发catch, 而是一层一层的传递下来的。
// 异常穿透的前提条件是所有的.then都没有指定失败状态的回调函数。
// 如果.catch前的所有.then都指定了失败状态的回调函数，.catch就失去了意义