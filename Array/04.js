// 4.寻找两个正序数组的中位数
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5



// 思路:1.合并排序 2.判断长度,取中位数
//暴力破解
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length === nums2.length === 0) {
        return 0
    }
    var nums = nums1.concat(...nums2).sort((a, b) => {
        return a - b
    })
    var nums_length = nums.length;
    if (nums_length == 1) {
        return nums[0]
    }
    if (nums_length % 2 == 0) {
        return (nums[nums_length / 2] + (nums[nums_length / 2 - 1])) / 2
    } else {
        const mid = Math.floor(nums_length / 2)
        return nums[mid]
    }
};


//双指针 1.不进行合并 2.总长度为奇数 取n/2的值   偶数时 取n/2和n/2-1的值  3. 双指针直接遍历,向后移动
var findMedianSortedArrays = function (nums1, nums2) {
    let nums1_length = nums1.length
    let nums2_length = nums2.length
    //两个数组的总长度
    let nums_length = nums1_length + nums2_length
    //保存移动的指针的值
    let preValue = -1
    let curValue = -1
    //两个指针
    let point1 = 0;
    let point2 = 0;

    for (let i = 0; i <= Math.floor(nums_length / 2); i++) {
        preValue = curValue
        //在nums1移动
        if (point1 < nums1_length && (point2 >= nums2_length || nums1[point1] < nums2[point2])) {
            curValue = nums1[point1]
            point1++
        } else { //在nums2移动
            curValue = nums2[point2]
            point2++
        }
    }
    if (nums_length % 2 == 0) {
        return (preValue + curValue) / 2
    } else {
        return curValue
    }
};

var nums1 = [1, 2]
var nums2 = [2, 5, 6, 7]
console.log(findMedianSortedArrays(nums1, nums2))