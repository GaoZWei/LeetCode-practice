// 四数之和
// 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，
// 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。 注意：答案中不可以包含重复的四元组。
// 示例 1：
// 输入：nums = [1,0,-1,0,-2,2], target = 0
// 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// 示例 2：
// 输入：nums = [], target = 0
// 输出：[]

// 双循环＋双指针
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b)
    var arr = []
    var len = nums.length
    if (len < 4) {
        return arr;
    }
    for (let i = 0; i < len - 3; i++) {
        var n1 = nums[i]
        if (i > 0 && n1 == nums[i - 1]) { //去重
            continue
        }
        if (n1 + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) { //直接干掉
            break
        }
        if (n1 + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) { //直接进下一次循环
            continue
        }
        for (let j = i + 1; j < len - 2; j++) {
            let n2 = nums[j]
            if (j > i + 1 && n2 == nums[j - 1]) {
                continue
            }
            if (n1 + n2 + nums[j + 1] + nums[j + 2] > target) {
                break
            }
            if (n1 + n2 + nums[len - 2] + nums[len - 1] < target) {
                continue
            }
            let left = j + 1;
            let right = len - 1
            while (left < right) {
                let n3 = nums[left]
                let n4 = nums[right]
                let sum = n1 + n2 + n3 + n4
                if (sum == target) {
                    arr.push([n1, n2, n3, n4])
                    while (left < right && n3 == nums[left + 1]) { //去重
                        left++
                    }
                    left++
                    while (left < right && n4 == nums[right - 1]) {
                        right--
                    }
                    right--
                } else if (sum < target) {
                    left++
                } else if (sum > target) {
                    right--
                }

            }
        }
    }
    return arr
};

var nums = [1, 0, -1, 0, -2, 2]
var target = 0
var nums = [2, 2, 2, 2, 2]
var target = 8
console.log(fourSum(nums, target))