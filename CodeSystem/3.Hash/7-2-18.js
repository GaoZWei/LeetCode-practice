// 18. 四数之和
// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组

var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    var n = nums.length
    if (n < 4) return []
    var res = []
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue
            var left = j + 1
            var right = n - 1
            while (left < right) {
                var sum = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum < target) {
                    left++
                    continue
                }
                if (sum > target) {
                    right--
                    continue
                }
                res.push([nums[i], nums[j], nums[left], nums[right]])
                while (left < right && nums[left] == nums[++left]); //简略版
                while (left < right && nums[right] == nums[--right]);
            }
        }
    }
    return res
}

var nums = [1, 0, -1, 0, -2, 2],
    target = 0
console.log(fourSum(nums, target))