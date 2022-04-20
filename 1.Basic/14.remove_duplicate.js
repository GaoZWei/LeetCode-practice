// 数组去重

var arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]

// way1:Set集合
var res1 = Array.from(new Set(arr))

// way2:双层for+splice
var unique = arr => {
    var len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1)
                len--
                j--
            }
        }
    }
    return arr
}
// console.log(unique(arr));

// way3:indexOf
var unique2 = arr => {
    var res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.indexOf(arr[i]) == -1) {
            res.push(arr[i])
        }
    }
    return res
}
// console.log(unique2(arr));

// way4:includes  =>true/false

// way5:filter(filter 为数组中的每个元素调用一次 callback 函数，
// 并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。)
// indexof返回第一个索引!!!
var unique4 = arr => {
    return arr.filter((item, index) => { //第一个item表示当前元素的值，第二个index表示当前元素的索引值，
        return arr.indexOf(item) == index   //indexof返回第一个索引!!!
    })
}

// way6:map的 set,get,has