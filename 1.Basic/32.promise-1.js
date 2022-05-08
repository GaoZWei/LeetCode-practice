// 手写promise

class Commitment {
    static PENDING = '待定';
    static FULFILLED = '成功';
    static REJECTED = '拒绝';
    constructor(func) {
        this.status = Commitment.PENDING
        this.result = null //结果的参数
        this.resolveCallBacks = [] //解决问题5
        this.rejectCallBacks = []
        try { //2.直接处理错误
            func(this.resolve.bind(this), this.reject.bind(this)) //给实例的resolve方法绑定这个this为当前的实例对象
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        setTimeout(() => {
            if (this.status == Commitment.PENDING) {
                this.status = Commitment.FULFILLED
                this.result = result
                this.resolveCallBacks.forEach(callback => { //遍历自身的数组,看是否有then里面保留来的待执行函数
                    callback(result)
                })
            }
        })
    }
    reject(result) {
        setTimeout(() => {
            if (this.status == Commitment.PENDING) {
                this.status = Commitment.REJECTED
                this.result = result
                this.resolveCallBacks.forEach(callback => {
                    callback(result)
                })
            }
        })
    }
    then(onFULFILLED, onREJECTED) {
        return new Commitment((resolve, reject) => { //then的链式
            onFULFILLED = typeof onFULFILLED === "function" ? onFULFILLED : () => {} //3.处理then中函数不是函数,默认忽略
            onREJECTED = typeof onREJECTED === "function" ? onREJECTED : () => {}
            if (this.status == Commitment.FULFILLED) {
                setTimeout(() => { //4.设置异步
                    onFULFILLED(this.result)
                })
            }
            if (this.status == Commitment.REJECTED) {
                setTimeout(() => {
                    onREJECTED(this.result)
                })
            }
            if (this.status == Commitment.PENDING) { //解决5问题
                //    让then里的函数稍后执行,等resolve函数执行了以后,再执行then
                this.resolveCallBacks.push(onFULFILLED)
                this.rejectCallBacks.push(onREJECTED)
            }
        })
    }
}
//4.处理异步功能
// console.log('第一步');
// let promise = new Commitment((resolve, reject) => {
//     console.log('第二步');
//     resolve('这次一定')
// })
// promise.then(
//     result => {
//         console.log(result);
//     }, result => {
//         console.log(result.message);
//     }
// )
// console.log('第三步');

//5.额外添加setTimeOut问题 (先执行then方法,又发现这个时候状态还是待定)
console.log('第一步');
let promise = new Commitment((resolve, reject) => {
    console.log('第二步');
    setTimeout(() => {
        resolve('这次一定')
        reject('下次一定')
        console.log('第四步');
    })
})
promise.then(
    result => {
        console.log(result);
    }, result => {
        console.log(result.message);
    }
)
console.log('第三步');