// 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 输入: [2,2,1]
// 输出: 1

// 思路1:
// 排序+遍历
var singleNumber = function (nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i]
        }
    }
    return nums[nums.length - 1]
};

// 思路2;
// 异或
var singleNumber = function (nums) {
    var ans = 0
    for (let i = 0; i < nums.length; i++) {
        ans ^= nums[i]
    }
    return ans
}
var nums = [2, 2, 1]
nums = [4, 1, 2, 1, 2]
console.log(singleNumber(nums))