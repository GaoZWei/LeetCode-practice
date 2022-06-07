// 渲染几万条数据不卡住页面
// 合理使用createDocumentFragment和requestAnimationFrame，将操作切分为一小段一小段执行。

// createDocumentFragment()方法，是用来创建一个虚拟的节点对象，或者说，是用来创建文档碎片节点
// requestAnimationFrame会把每一帧中的所有DOM操作集中起来，
// 在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率

setTimeout(() => {
    // 插入十万条数据
    const total = 100000;
    // 一次插入的数据
    const once = 20;
    // 插入数据需要的次数
    const loopCount = Math.ceil(total / once); //向上取整
    let countOfRender = 0;
    const ul = document.querySelector('ul');
    // 添加数据的方法
    function add() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < once; i++) {
            const li = document.createElement('li');
            li.innerText = Math.floor(Math.random() * total);
            fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        countOfRender += 1;
        loop();
    }

    function loop() {
        if (countOfRender < loopCount) {
            window.requestAnimationFrame(add);
        }
    }
    loop();
}, 0)