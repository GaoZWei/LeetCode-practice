// 453. 最小操作次数使数组元素相等
// 给定一个长度为 n 的 非空 整数数组，每次操作将会使 n - 1 个元素增加 1。找出让数组所有元素相等的最小操作次数。
// 输入：[1,2,3]
// 输出：3
// 解释：
// 只需要3次操作（注意每次操作会增加两个元素的值）：
// [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]

//转换思路, n-1个元素增加1 <=> 1个元素减1
var minMoves = function (nums) {
    var min = Math.min(...nums)
    var res = 0
    for (let i = 0; i < nums.length; i++) {
        res += (nums[i] - min)
    }
    return res
};
var nums = [1, 2, 3]
console.log(minMoves(nums))