// 丢失的数字
// 给定一个包含[0, n] 中 n 个数的数组 nums， 找出[0, n] 这个范围内没有出现在数组中的那个数。
// 时间O(n), 空间O(1)
// 输入：nums = [3,0,1]
// 输出：2

// 思路1:
// 异或
var missingNumber = function (nums) {
    var n = nums.length
    var res = 0
    res ^= n //先和n异或
    for (let i = 0; i < n; i++) {
        res = res ^ i ^ nums[i]
    }
    return res
};

//思路2:
// 等差数列,求和,再依次减去就可以了
var missingNumber = function (nums) {
    var len = nums.length
    var sum = ((len + 1) * len) / 2 //等差数列 这里项数n = len + 1   n-1=len
    for (let i = 0; i < len; i++) {
        sum -= nums[i]
    }
    return sum
}
var nums = [3, 0, 1]
console.log(missingNumber(nums))