// 手写promise
//  https://www.bilibili.com/video/BV1RR4y1p7my/?spm_id_from=333.788  蛋老师!!!
class Commitment {
    static PENDING = '待定';
    static FULFILLED = '成功';
    static REJECTED = '拒绝';
    constructor(func) {
        this.status = Commitment.PENDING
        this.result = null //结果的参数
        try { //2.直接处理错误
            func(this.resolve.bind(this), this.reject.bind(this)) //给实例的resolve方法绑定这个this为当前的实例对象
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        if (this.status == Commitment.PENDING) {
            this.status = Commitment.FULFILLED
            this.result = result
        }
    }
    reject(result) {
        if (this.status == Commitment.PENDING) {
            this.status = Commitment.REJECTED
            this.result = result
        }
    }
    then(onFULFILLED, onREJECTED) {
        onFULFILLED = typeof onFULFILLED === "function" ? onFULFILLED : () => {}//3.处理then中函数不是函数,默认忽略
        onREJECTED = typeof onREJECTED === "function" ? onREJECTED : () => {}
        if (this.status == Commitment.FULFILLED) {
            onFULFILLED(this.result)
        }
        if (this.status == Commitment.REJECTED) {
            onREJECTED(this.result)
        }
    }
}
//1.基础结构测试
// let promise = new Commitment((resolve, reject) => {
//     resolve('这次一定')
//     reject('下次一定')
// })

// promise.then( //两个参数,成功时的代码,拒绝时候的代码
//     result => {
//         console.log(result);
//     }, result => {
//         console.log(result.message);
//     }
// )

//2.原生的时候throw new Error会在then中把错误信息输出
// let promise = new Commitment((resolve, reject) => {
//     throw new Error('不成功')
// })
// promise.then(
//     result => {
//         console.log(result);
//     }, result => {
//         console.log(result.message);
//     }
// )
//3.原生的then不是函数被忽略
let promise = new Commitment((resolve, reject) => {
    resolve('111')
})
promise.then(
    undefined, result => {
        console.log(result.message);
    }
)