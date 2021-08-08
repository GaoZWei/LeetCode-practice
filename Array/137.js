// 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现三次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 思路1:
// 同136
// 排序+遍历
var singleNumber = function (nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i += 3) {
        if (nums[i] != nums[i + 1]) {
            return nums[i]
        }
    }
    return nums[nums.length - 1]
};

// 思路2:
// 去重后
// 3(a + b) - (a + b + b + b) = 2 a
var singleNumber = function (nums) {
    //去重
    let arr = [...new Set(nums)]
    //reduce求和
    return (3 * arr.reduce((a, b) => a + b) - nums.reduce((a, b) => a + b)) / 2
}

var nums = [0, 1, 0, 1, 0, 1, 99]
console.log(singleNumber(nums))