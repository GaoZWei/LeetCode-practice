//快排
var quickSort = (arr) => {
    if (arr.length <= 1) return arr
    var left = []
    var right = []
    var cur = arr.splice(0, 1)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < cur) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(cur, quickSort(right))
}
var arr = [5, 7, 1, 6, 2, 3, 9, 4, 8]
console.log(quickSort(arr))