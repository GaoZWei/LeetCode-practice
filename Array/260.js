// 只出现一次的数字 III
// 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 
// 找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。

// 进阶：你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？


// 思路:
// 位运算
// 异或＋不同的位+分组
var singleNumber = function (nums) {
    var xoy = 0;
    for (let i = 0; i < nums.length; i++) { //把所有的异或,得到这两个值的异或xoy
        xoy ^= nums[i]
    }
    var div = 0
    while ((xoy & 1) == 0) { //获取x,y不同的位置
        xoy >>>= 1
        div++
    }
    var x = 0,
        y = 0 //分两组,一组1,一组0
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] >>> div & 1 == 1) {
            x ^= nums[j]
        } else {
            y ^= nums[j]
        }
    }
    return [x, y]
};
var nums = [1, 2, 1, 3, 2, 5]
// var nums = [-1, 0]
console.log(singleNumber(nums))