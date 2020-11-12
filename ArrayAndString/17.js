// 长度最小的子数组
// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。
//如果不存在符合条件的子数组，返回 0。
// 输入：s = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// 如果你已经完成了 O(n) 时间复杂度的解法, 请尝试 O(n log n) 时间复杂度的解法。
var minSubArrayLen = function (s, nums) {
    const len = nums.length;
    const arr = []
    var min = len + 1
    var sum = 0
    for (let i = 0; i < len; i++) {
        arr.push(nums[i]) //将元素放入数组
        sum += nums[i]
        while (sum >= s) { //逐渐将数组前的元素推出
            min = Math.min(arr.length, min)
            sum -= arr[0]
            arr.shift()
        }
    }
    return min == len + 1 ? 0 : min
}
var s = 7
var nums = [2, 2, 1, 2, 4, 3]
console.log(minSubArrayLen(s, nums));