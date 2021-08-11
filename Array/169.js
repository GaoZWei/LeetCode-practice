// 多数元素
// 给定一个大小为 n 的数组， 找到其中的多数元素。 多数元素是指在数组中出现次数 大于⌊ n / 2⌋ 的元素。
// 你可以假设数组是非空的， 并且给定的数组总是存在多数元素。
// 输入：[3, 2, 3]
// 输出： 3

// 思路: 投票算法
// 设置初始值, result和 times
// 只需遍历一次
// 如果相同,times增加,不同,则times减少
var majorityElement = function (nums) {
    var res = nums[0]
    var times = 1
    for (let i = 1; i < nums.length; i++) {
        if (times == 0) {
            res = nums[i]
        }
        if (nums[i] == res) {
            times++
        } else {
            times--
        }
    }
    return res
};

var nums = [3, 2, 3]
nums = [2, 2, 1, 1, 1, 2, 2]
nums = [6, 5, 5]
console.log(majorityElement(nums))