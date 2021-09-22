// 456. 132 模式
// 给你一个整数数组 nums ，数组中共有 n 个整数。132 模式的子序列 
// 由三个整数 nums[i]、nums[j] 和 nums[k] 组成，
// 并同时满足：i < j < k 和 nums[i] < nums[k] < nums[j] 。
// 如果 nums 中存在 132 模式的子序列 ，返回 true ；否则，返回 false 。

// 输入：nums = [-1,3,2,0]
// 输出：true
// 解释：序列中有 3 个 132 模式的的子序列：[-1, 3, 2]、[-1, 3, 0] 和 [-1, 2, 0] 。

// 三指针
var find132pattern = function (nums) {
    var len = nums.length
    if (len < 3) return false
    for (let i = 0; i < len - 2; i++) {
        for (let j = 1; j < len - 1; j++) {
            if (nums[i] >= nums[j]) {
                continue
            }
            for (let k = 2; k < len; k++) {
                if (nums[i] < nums[k] && nums[k] < nums[j] && i < j && j < k) {
                    return true
                }
            }
        }
    }
    return false
};

//单调栈
// 从后遍历,找med,找到比med小的,返回true
var find132pattern = function (nums) {
    var n = nums.length
    var med = -Infinity
    var stack = []
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < med) return true //找到了min
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) { //当i的值大于栈顶元素的时候,将栈顶元素pop出来,将该值push进去
            med = stack.pop()
        }
        stack.push(nums[i])
    }
    return false
}
var nums = [-1, 3, 2, 0]
var nums = [1, 2, 3, 4]
var nums = [3, 1, 4, 2]
console.log(find132pattern(nums))