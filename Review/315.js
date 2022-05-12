// 315. 计算右侧小于当前元素的个数(华为)
// 给你一个整数数组 nums ，按要求返回一个新数组 counts 。
// 数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。
// 手画图解 https://leetcode.cn/problems/count-of-smaller-numbers-after-self/solution/shou-hua-tu-jie-er-fen-cha-zhao-si-lu-by-hyj8/

//二分查找
var countSmaller = function (nums) {
    var len = nums.length
    if (len == 0) return nums
    var counts = new Array(len)
    var sorted = []
    for (let i = len - 1; i >= 0; i--) {
        var index = findIndex(sorted, nums[i])
        sorted.splice(index, 0, nums[i])
        counts[i] = index
    }
    return counts
};

function findIndex(arr, target) {
    var left = 0
    var right = arr.length - 1
    while (left < right) {
        var mid = Math.floor((left + right) / 2)
        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
        // if (arr[mid] > target) {
        //     right = mid - 1
        // } else {
        //     left = mid
        // }
    }
    if (arr[left] < target) {
        return left + 1
    }
    return left
}


console.log(findIndex([1, 3, 4, 5, 7, 8], 6));

var nums = [5, 2, 6, 1]
console.log(countSmaller(nums));