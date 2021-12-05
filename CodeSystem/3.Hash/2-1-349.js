// 349. 两个数组的交集
// 给定两个数组，编写一个函数来计算它们的交集。

//直接双Set
var intersection = function (nums1, nums2) {
    var res = []
    var set1 = new Set()
    var set2 = new Set()
    for (let i = 0; i < nums1.length; i++) {
        set1.add(nums1[i])
    }
    for (let j = 0; j < nums2.length; j++) {
        set2.add(nums2[j])
    }
    for (var a of set2) {
        if (set1.has(a)) {
            res.push(a)
        }
    }
    return res
}

//操作较短的 (效率较好)
var intersection = function (nums1, nums2) {
    if (nums1.length < nums2.length) {
        var tmp = nums1
        nums1 = nums2
        nums2 = tmp
    }
    var setNum1 = new Set(nums1)
    var resSet = new Set()

    for (let i = 0; i < nums2.length; i++) {
        setNum1.has(nums2[i]) && resSet.add(nums2[i])
    }
    return Array.from(resSet)
}

//Map实现
var intersection = function (nums1, nums2) {
    var res = []
    var map = new Map()
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], true)
    }
    for (let j = 0; j < nums2.length; j++) {
        if (map.has(nums2[j])) {
            res.push(nums2[j])
            map.delete(nums2[j])
        }
    }
    return res
}

//双指针实现
var intersection = function (nums1, nums2) {
    var m = nums1.length
    var n = nums2.length
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    var index1 = 0
    var index2 = 0
    var res = []
    while (index1 < m && index2 < n) {
        var num1 = nums1[index1]
        var num2 = nums2[index2]
        if (num1 == num2) {
            if (!res.length || num1 != res[res.length - 1]) { //数组为空或者num1与结果数组最后一个不同
                res.push(num1)
            }
            index1++
            index2++
        } else if (num1 > num2) {
            index2++
        } else if (num1 < num2) {
            index1++
        }
    }
    return res
}
var nums1 = [1, 2, 2, 1],
    nums2 = [2, 2]
var nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4]
console.log(intersection(nums1, nums2))