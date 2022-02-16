// 2.版本号排序
// https://zhuanlan.zhihu.com/p/166534317

var arr = ['1.2.1', '1.0.12.3']
var arr = ['1.2.1', '1.2.1.1']

arr.sort(function (a, b) {
    var i = 0
    var arr1 = a.split('.')
    var arr2 = b.split(".")
    while (true) {
        var s1 = arr1[i]
        var s2 = arr2[i]
        i++
        if (s1 == undefined || s2 == undefined) {
            return arr2.length - arr1.length
        }
        if (s1 == s2) continue
        return s2 - s1
    }

})
console.log(arr);