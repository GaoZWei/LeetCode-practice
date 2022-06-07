// 图片懒加载
// https://www.bilibili.com/video/BV1L64y1Y7Hi?p=1

// way1:
// (function () {
//     let box = document.querySelector(".box"),
//         boxImg = document.querySelector('img'),
//         HTML = document.documentElement

//     const lazyImg = function () {
//         if (boxImg.isLoad) return;
//         let {
//             top,
//             bottom
//         } = box.getBoundingClientRect()
//         if (top >= 0 && bottom <= HTML.clientHeight) {
//             boxImg.isLoad = true
//             //盒子完全出现在可视窗口中,加载真实图片
//             boxImg.src = boxImg.getAttribute("data-src")
//             boxImg.onload = () => {
//                 boxImg.style.opacity = 1
//             }
//         }
//     }
//     lazyImg()
//     window.addEventListener('scroll', lazyImg) //缺少节流,默认每间隔5ms触发一次
//     // window.addEventListener('scroll', throttle(lazyImg))
// })()

// way2:
// IntersectionObserver API 自动监听元素和可视窗口位置
(function () {
    let box = document.querySelector(".box"),
        boxImg = document.querySelector('img')
    let ob = new IntersectionObserver(changes => {
        // changes[0]监听第一个元素和可视窗口的交叉信息
        console.log(changes[0]);
        let {
            isIntersecting,
            target
        } = changes[0]
        if (isIntersecting) {
            //完全出现
            boxImg.src = boxImg.getAttribute("data-src")
            boxImg.onload = () => {
                boxImg.style.opacity = 1
            }
            ob.unobserve(target)
        }
    }, {
        threshold: [1] //完全出现在视口
    })

    ob.observe(box)
})()

// way3: 未来
// Image.loading = lazy