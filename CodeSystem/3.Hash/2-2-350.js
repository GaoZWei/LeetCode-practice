// 350. 两个数组的交集 II
// 给你两个整数数组 nums1 和 nums2， 请你以数组形式返回两数组的交集。 
// 返回结果中每个元素出现的次数， 应与元素在两个数组中都出现的次数一致（ 如果出现次数不一致， 则考虑取较小值）。 可以不考虑输出结果的顺序。

//基础的Map
var intersect = function (nums1, nums2) {
    var map = new Map()
    var res = []
    for (let i = 0; i < nums1.length; i++) {
        if (!map.get(nums1[i])) {
            map.set(nums1[i], 1)
        } else {
            map.set(nums1[i], map.get(nums1[i]) + 1)
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map.get(nums2[i])) {
            res.push(nums2[i])
            map.set(nums2[i], map.get(nums2[i]) - 1)
        }
    }
    return res
}

//排序+双指针
var intersect = function (nums1, nums2) {
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
            res.push(num1)
            index1++
            index2++
        } else if (num1 < num2) {
            index1++
        } else if (num1 > num2) {
            index2++
        }
    }
    return res
}

//大小数组
var intersect = function (nums1, nums2) {
    var res = []
    if (nums1.length > nums2.length) {
        maxArr = nums1
        minArr = nums2
    } else {
        maxArr = nums2
        minArr = nums1
    }
    for (let i = 0; i < minArr.length; i++) {
        var maxIndex = maxArr.indexOf(minArr[i])
        if (maxIndex != -1) {
            res.push(maxArr.splice(maxIndex, 1)[0])
        }
    }
    return res
}
var nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4]
// var nums1 = [1, 2, 2, 1],
//     nums2 = [2, 2]
console.log(intersect(nums1, nums2))