// 462. 最少移动次数使数组元素相等 II
// 给定一个非空整数数组， 找到使所有数组元素相等所需的最小移动数， 其中每次移动可将选定的一个元素加1或减1。
// 您可以假设数组的长度最多为10000。

//排序+中位数+累加
var minMoves2 = function (nums) {
    nums.sort((a, b) => a - b)
    var n = nums.length
    var mid = nums[Math.ceil(n / 2) - 1]
    var res = 0
    for (let i = 0; i < n; i++) {
        res += Math.abs(nums[i] - mid)
    }
    return res
}
var nums = [1, 2, 3, 4, 5]
console.log(minMoves2(nums))