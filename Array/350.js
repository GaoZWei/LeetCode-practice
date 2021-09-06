// 两个数组的交集 II
// 给定两个数组，编写一个函数来计算它们的交集。
// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。

// 排序+双指针
var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    var m = nums1.length,
        n = nums2.length
    var l = 0,
        r = 0
    var res = []
    while (l < m && r < n) {
        if (nums1[l] == nums2[r]) {
            res.push(nums1[l])
            l++
            r++
        } else {
            nums1[l] < nums2[r] ? l++ : r++
        }
    }
    return res
};

// 区分大小数组,在大数组中找小数组中的元素
var intersect = function (nums1, nums2) {
    var res = []
    var maxArr = nums1.length > nums2.length ? nums1 : nums2
    var minArr = nums1.length > nums2.length ? nums2 : nums1 //这块注意下nums1和nums2的顺序
    for (let i = 0; i < minArr.length; i++) {
        let maxIndex = maxArr.indexOf(minArr[i])
        if (maxIndex != -1) {
            // console.log(maxArr.splice(maxIndex, 1))
            res.push(maxArr.splice(maxIndex, 1)[0])
        }
    }
    return res
}



var nums1 = [1, 2, 2, 1],
    nums2 = [2, 2]

var nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4]
console.log(intersect(nums1, nums2))