// 函数柯里化
// https://www.bilibili.com/video/BV1RA411E7aN?spm_id_from=333.337.search-card.all.click (蛋老师)

function add() {
    var args = Array.prototype.slice.call(arguments) //类数组没法用push

    var inner = function () {
        args.push(...arguments)
        return inner //递归   会自动执行toString方法
    }
    inner.toString = function () { //重写toString方法
        return args.reduce((prev, cur) => { //用reduce直接计算即可
            return prev + cur
        })
    }
    return inner

}
console.log(add(1)(2, 3)(3).toString());