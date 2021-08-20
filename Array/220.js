// 存在重复元素 III
// 给你一个整数数组 nums 和两个整数 k 和 t 。
// 请你判断是否存在 两个不同下标 i 和 j，使得 abs(nums[i] - nums[j]) <= t ，
// 同时又满足 abs(i - j) <= k 。
// 如果存在则返回 true，不存在返回 false。

//思路1:
// 双重循环,直接判断
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t && j - i <= k) {
                return true
            }
        }
    }
    return false
};

//思路2:
//桶排序
// 相同桶,return true
// 相邻桶,判断后,返回
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    if (k < 0 || t < 0) {
        return false
    }
    var map = new Map()
    var l = 0
    while (l < nums.length) {
        var key = getKey(nums[l])
        if (map.has(key)) { //相同桶
            return true
        } else if (map.has(key + 1) || map.has(key - 1)) { //相邻桶
            if (map.get(key + 1) - nums[l] <= t) {
                return true
            }
            if (nums[l] - map.get(key - 1) <= t) {
                return true
            }
        }
        map.set(key, nums[l])
        if (l >= k) { //这个限制l的个数,与219题相同
            map.delete(getKey(nums[l - k]))
        }
        l++
    }
    return false
}
var getKey = (value) => { //获取桶序号
    return Math.floor(value / (t + 1))
}
var nums = [1, 2, 3, 1],
    k = 3,
    t = 0
// var nums = [1, 5, 9, 1, 5, 9],
//     k = 2,
//     t = 3
// var nums = [],
//     k = 0,
//     t = 0
// var nums = [1, 2, 1, 1],
//     k = 1,
//     t = 0

console.log(containsNearbyAlmostDuplicate(nums, k, t))