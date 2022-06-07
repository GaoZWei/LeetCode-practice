// 滚动加载
// https://juejin.cn/post/6875152247714480136#heading-41

window.addEventListener('scroll', function () {
    const clientHeight = document.documentElement.clientHeight; //窗口高度     (下)
    const scrollTop = document.documentElement.scrollTop; //被卷起来的高度(滚动条隐藏的)(上)
    const scrollHeight = document.documentElement.scrollHeight; //对象的实际尺寸  (完整)
    if (clientHeight + scrollTop >= scrollHeight) { //上+下>=完整
        // 检测到滚动至页面底部，进行后续操作
        // ...
    }
}, false);