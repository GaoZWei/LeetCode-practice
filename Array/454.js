// 454. 四数相加 II
// 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
// 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。


//思路:
// 用map存储A+B的和出现的次数
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    var map = new Map()
    var count = 0
    for (let n1 of nums1) {
        for (let n2 of nums2) {
            var sum = n1 + n2
            map.set(sum, (map.get(sum) || 0) + 1)
        }
    }

    for (let n3 of nums3) {
        for (let n4 of nums4) {
            var rest = -(n3 + n4)
            count += map.get(rest) || 0
        }
    }
    return count
};

var nums1 = [1, 2],
    nums2 = [-2, -1],
    nums3 = [-1, 2],
    nums4 = [0, 2]
console.log(fourSumCount(nums1, nums2, nums3, nums4))