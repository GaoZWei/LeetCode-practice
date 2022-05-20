// Promise.race 应用：解决超时问题 (https://xie.infoq.cn/article/d91fb7973892068d1e4bc9eb6)

// 包装 promise，使之具备新功能：控制 promise 状态
function wrap(p1) {
    let abort;
    let p = new Promise((resolve, reject) => {
        // 拿到 p 的 reject，以便于随时更新 p 的状态
        abort = reject;
    })

    // Promise.race：相当于给 p1 绑了一个定时炸弹 p
    let p2 = Promise.race([p, p1]);
    p2.abort = abort; // p2 就获得炸弹的遥控器 

    return p2;
}

let p1 = new Promise((resolve, reject) => {
    abort = reject;
    setTimeout(() => {
        resolve('成功')
    }, 3000);
})

let p2 = wrap(p1);

p2.then((data) => {
    console.log('then', data)
}, (err) => {
    console.log('err', err)
})
setTimeout(() => {
    p2.abort('已超时')
}, 1000); //1s直接reject

// 执行结果:1 秒后输出"err 已超时",3 秒全部执行完成