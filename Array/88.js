// 合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2， 请你将 nums2 合并到 nums1 中， 使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。 你可以假设 nums1 的空间大小等于 m + n， 这样它就有足够的空间保存来自 nums2 的元素。

// 输入： nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// 输出：[1, 2, 2, 3, 5, 6]


// 思路1:
// 创建一个新数组,直接按顺序往里推
var merge = function (nums1, m, nums2, n) {
    var arr = []
    var i = 0;
    var j = 0
    while (i < m || j < n) {
        if (i == m) {
            arr.push(nums2[j])
            j++
        } else if (j == n) {
            arr.push(nums1[i])
            i++
        } else if (nums1[i] <= nums2[j]) {
            arr.push(nums1[i])
            i++
        } else {
            arr.push(nums2[j])
            j++
        }
    }
    return arr
};

//思路二:
// 合并+sort
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2)
    nums1.sort((a, b) => {
        return a - b
    })
    return nums1
}

// 思路三:
// 原地修改 O(1)
// 逆向双指针
var merge = function (nums1, m, nums2, n) {
    var k = m + n - 1
    var i = m - 1,
        j = n - 1
    while (i >= 0 || j >= 0) {
        if (i < 0) { //当nums1的元素遍历完
            nums1[k] = nums2[j]
            k--
            j--
        } else if (nums2[j] >= nums1[i]) { //当nums2中的元素大于等于nums1中的元素
            nums1[k] = nums2[j]
            k--
            j--
        } else { //当nums2的元素遍历完/nums1中的元素大于nums2中的元素
            nums1[k] = nums1[i]
            k--
            i--
        }
    }
    return nums1
}
var nums1 = [1, 2, 3, 0, 0, 0],
    m = 3,
    nums2 = [2, 5, 6],
    n = 3
console.log(merge(nums1, m, nums2, n))