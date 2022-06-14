// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，
// 判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    if (nums.length < 3) return []
    var res = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break
        if (i > 0 && nums[i] == nums[i - 1]) continue
        var left = i + 1
        var right = nums.length - 1
        while (left < right) {
            var sum = nums[i] + nums[left] + nums[right]
            if (sum == 0) {
                res.push([nums[i], nums[left], nums[right]])
                while (nums[left] == nums[++left]); //这里加while
                while (nums[right] == nums[--right]);
            } else if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            }
        }
    }
    return res
}

var nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))