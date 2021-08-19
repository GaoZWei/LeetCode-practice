// 存在重复元素
// 给定一个整数数组， 判断是否存在重复元素。
// 如果存在一值在数组中出现至少两次， 函数返回 true。 如果数组中每个元素都不相同， 则返回 false。

//Set
var containsDuplicate = function (nums) {
    var set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i])
        } else {
            return true
        }
    }
    return false
};

//Hash
var containsDuplicate = function (nums) {
    var map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return true
        } else {
            map.set(nums[i], 1)
        }
    }
    return false
}
var nums = [1, 2, 3, 1]
var nums = [1, 2, 3, 4]
var nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
var nums = [3, 3]
console.log(containsDuplicate(nums))