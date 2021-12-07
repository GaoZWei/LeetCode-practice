// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

var threeSum = function (nums) {
    var n = nums.length
    var res = []
    if (n < 3) return res
    nums.sort((a, b) => a - b)
    for (let i = 0; i < n - 2; i++) {
        var n1 = nums[i]
        if (n1 > 0) break
        if (i > 0 && nums[i] == nums[i - 1]) continue
        var left = i + 1
        var right = n - 1
        while (left < right) {
            n2 = nums[left]
            n3 = nums[right]
            sum = n1 + n2 + n3
            if (sum == 0) {
                res.push([n1, n2, n3])
                while (n2 == nums[left + 1]) { //这时i不变,需要在这里去重
                    left++
                }
                while (n3 == nums[right - 1]) {
                    right--
                }
                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
            // while (left < right && nums[left] == nums[++left]);  //写的太复杂
            // while (left < right && nums[right == nums[--right]]);
        }
    }
    return res
}
var nums = [-1, 0, 1, 2, -1, -4]
var nums = [0]
console.log(threeSum(nums))