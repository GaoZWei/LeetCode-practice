// 存在重复元素 II
// 给定一个整数数组和一个整数 k， 判断数组中是否存在两个不同的索引 i 和 j，
// 使得 nums[i] = nums[j]， 并且 i 和 j 的差的 绝对值 至多为 k。

// 思路:
// 双重循环,直接遍历
var containsNearbyDuplicate = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= i + k; j++) {
            if (nums[i] == nums[j]) {
                return true
            }
        }
    }
    return false
};
// Set
var containsNearbyDuplicate = function (nums, k) {
    var set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true
        }
        set.add(nums[i])
        if (set.size > k) {
            set.delete(nums[i - k])
        }
    }
    return false
}

var nums = [1, 2, 3, 1, 2, 3],
    k = 2
var nums = [1, 2, 3, 1],
    k = 3
var nums = [1, 0, 1, 1],
    k = 1

console.log(containsNearbyDuplicate(nums, k))