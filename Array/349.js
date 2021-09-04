// 两个数组的交集
// 给定两个数组， 编写一个函数来计算它们的交集。

//Map判断
var intersection = function (nums1, nums2) {
    var map = new Map()
    var res = []
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i], true)
    }
    for (let j = 0; j < nums2.length; j++) {
        if (map.has(nums2[j])) { //存在,存入res,并从map中干掉
            res.push(nums2[j])
            map.delete(nums2[j])
        }
    }
    return res
};

//排序+双指针
var intersection = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    var m = nums1.length
    var n = nums2.length
    var index1 = 0,
        index2 = 0
    var res = []
    while (index1 < m && index2 < n) {
        var num1 = nums1[index1],
            num2 = nums2[index2]
        if (num1 == num2) {
            if (!res.length || num1 != res[res.length - 1]) { //res为空,或者res最大的元素与元素不同
                res.push(num1)
            }
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

var nums1 = [1, 2, 2, 1],
    nums2 = [2, 2]

var nums1 = [4, 9, 5]
nums2 = [9, 4, 9, 8, 4]
console.log(intersection(nums1, nums2))