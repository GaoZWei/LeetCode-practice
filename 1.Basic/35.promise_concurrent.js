// Promise 实现并发限制
// https://juejin.cn/post/6854573217013563405

// 队列实现
class Scheduler {
    constructor() {
        this.queue = []
        this.maxNum = 3
        this.curNum = 0
    }
    add(promiseCreator) {
        this.queue.push(promiseCreator)
        this.request()
    }
    // taskStart() {
    //     for (let i = 0; i < this.maxNum; i++) {
    //         this.request();
    //     }
    // }
    request() {
        if (!this.queue || !this.queue.length || this.curNum >= this.maxNum) return;
        this.curNum++
        this.queue.shift()().then(() => {
            this.curNum--
            this.request()
        })
    }
}

const timeout = time => new Promise(resolve => {
    setTimeout(resolve, time);
})

const scheduler = new Scheduler();

const addTask = (time, order) => {
    scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// scheduler.taskRun()
// output: 2 3 1 4