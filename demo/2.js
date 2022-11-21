var arr1 = [2, 3, 1, 3, 2]
var arr2 = [4, 5, 2, 3, 4]
//无序数组,合并成升序不重复的数组
function getRes(arr1, arr2) {
    var arr = arr1.concat(arr2)
    arr.sort((a, b) => a - b)
    var res = arr.length > 0 ? [arr[0]] : []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            continue
        }
        res.push(arr[i])
    }
    return res
}
console.log(getRes(arr1, arr2));