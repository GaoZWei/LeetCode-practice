// 数组扁平化

var arr = [1, [2, [3, [4, 5]]]]
// way1: flat()函数
var res1 = arr.flat(Infinity) //flat的参数决定扁平层数  [ 1, 2, 3, 4, 5 ]

// way2:正则
var res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(",") //把[  或者  ]替换为空,将其用,分割为数组  [ '1', '2', '3', '4', '5' ]

// way3:正则改良
var res3 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']') //[ '1', '2', '3', '4', '5' ]

// way4:reduce
var flatten = arr => {
    return arr.reduce((pre, cur) => { //reduce  两个参数pre,cur,根据pre计算
        // console.log("cur", cur);
        a = pre.concat(Array.isArray(cur) ? flatten(cur) : cur) //concat 返回新数组  递归从后往前concat
        // console.log(a);
        return a
    }, [])
}
var res4 = flatten(arr) //[ 1, 2, 3, 4, 5 ]

//way5:函数递归
var res5 = []
var fn = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            fn(arr[i])
        } else {
            res5.push(arr[i])
        }
    }
}
fn(arr)