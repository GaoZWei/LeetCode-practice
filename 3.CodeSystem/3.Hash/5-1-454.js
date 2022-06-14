// 454. 四数相加 II
// 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，请你计算有多少个元组 (i, j, k, l) 能满足：
// 0 <= i, j, k, l < n
// nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

var fourSumCount = function (nums1, nums2, nums3, nums4) {
    var map = new Map()
    var count = 0
    for (let n1 of nums1) {
        for (let n2 of nums2) {
            var sum = n1 + n2
            if (map.has(sum)) {
                map.set(sum, map.get(sum) + 1)
            } else {
                map.set(sum, 1)
            }
            // map.set(sum, (map.get(sum) || 0) + 1)   简略写法
        }
    }

    for (let n3 of nums3) {
        for (let n4 of nums4) {
            var sum = n3 + n4
            var rest = -sum
            if (map.has(rest)) {
                count++
            }
            // count += map.get(rest) || 0   简略写法
        }
    }
    return count
};
var nums1 = [1, 2],
    nums2 = [-2, -1],
    nums3 = [-1, 2],
    nums4 = [0, 2]
console.log(fourSumCount(nums1, nums2, nums3, nums4))