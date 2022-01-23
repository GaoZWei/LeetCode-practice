// 将数字千分位用逗号隔开
// https://juejin.cn/post/6946136940164939813#heading-42
var format = (n) => {
    var num = n.toString()
    var decimals = ""
    var len;
    if (num.indexOf(".") > -1) {
        decimals = num.split('.')[1]
        len = num.indexOf(".")
    } else {
        len = num.length
    }
    if (len <= 3) {
        return num
    } else {
        var tmp = ''
        var remainder = len % 3
        decimals ? tmp = "." + decimals : tmp
        if (remainder > 0) { //match返回数组
            return num.slice(0, remainder) + "," + num.slice(remainder, len).match(/\d{3}/g).join(",") + tmp
        } else {
            return num.slice(0, len).match(/\d{3}/g).join(',')
        }
    }
}
console.log(format(12323.333333));

// 有问题的
// let format = n => {
//     let num = n.toString() // 转成字符串
//     let decimals = ''
//         // 判断是否有小数
//     num.indexOf('.') > -1 ? decimals = num.split('.')[1] : decimals
//     let len = num.length
//     if (len <= 3) {
//         return num
//     } else {
//         let temp = ''
//         let remainder = len % 3
//         decimals ? temp = '.' + decimals : temp
//         if (remainder > 0) { // 不是3的整数倍
//             return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp
//         } else { // 是3的整数倍
//             return num.slice(0, len).match(/\d{3}/g).join(',') + temp 
//         }
//     }
// }
// console.log(format(12323.333333));//123,333,333.333333  (出问题了)