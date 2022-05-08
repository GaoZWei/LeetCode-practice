//自己写promise

class MyPromise {
    static pending = 'pending'
    static fulfilled = 'fulfilled'
    static rejected = 'rejected'
    constructor(func) {
        this.status = MyPromise.pending
        this.result = null
        this.resolveCallBacks = []
        this.rejectCallBacks = []
        try {
            func(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(result) {
        setTimeout(() => {
            if (this.status === MyPromise.pending) {
                this.status = MyPromise.fulfilled
                this.result = result
                this.resolveCallBacks.forEach(callback => {
                    callback(result)
                })
            }
        })
    }
    reject(result) {
        setTimeout(() => {
            if (this.status === MyPromise.pending) {
                this.status = MyPromise.rejected
                this.result = result
                this.rejectCallBacks.forEach(callback => {
                    callback(result)
                })
            }
        })
    }
    then(onfulfilled, onrejected) {
        return new MyPromise((resolve, reject) => {
            onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : () => {}
            onrejected = typeof onrejected === 'function' ? onrejected : () => {}
            if (this.status == MyPromise.fulfilled) {
                setTimeout(() => {
                    onfulfilled(this.result)
                })
            }
            if (this.status == MyPromise.rejected) {
                setTimeout(() => {
                    onrejected(this.result)
                })
            }
            if (this.status == MyPromise.pending) {
                this.resolveCallBacks.push(onfulfilled)
                this.rejectCallBacks.push(onrejected)
            }
        })
    }
}

console.log('第一步');
let promise = new MyPromise((resolve, reject) => {
    console.log('第二步');
    setTimeout(() => {
        resolve('这次一定')
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