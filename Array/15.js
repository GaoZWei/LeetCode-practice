// 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 
// 请你找出所有和为 0 且不重复的三元组。

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

var threeSum = function (nums) {
    //排序
    nums.sort((a, b) => {
        return a - b
    })
    var res = []
    var len = nums.length
    if (nums == null || len < 3) { //去除小于3个数的情况
        return res;
    }
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) { //固定值大于0,直接干掉
            break
        }
        if (i > 0 && nums[i] == nums[i - 1]) { //去重
            continue
        }
        var Left = i + 1
        var Right = len - 1
        while (Left < Right) {
            if (nums[i] + nums[Left] + nums[Right] == 0) {
                res.push([nums[i], nums[Left], nums[Right]])
                while (nums[Left] == nums[Left + 1]) { //这时i不变,需要在这里去重
                    Left++
                }
                while (nums[Right] == nums[Right - 1]) {
                    Right--
                }
                Left++
                Right--
            }
            if (nums[i] + nums[Left] + nums[Right] < 0) {
                Left++
            }
            if (nums[i] + nums[Left] + nums[Right] > 0) {
                Right--
            }
        }
    }
    return res
};

//简单优化
var threeSum = function (nums) {
    //排序
    nums.sort((a, b) => {
        return a - b
    })
    var res = []
    var len = nums.length
    if (nums == null || len < 3) { //去除小于3个数的情况
        return res;
    }
    for (let i = 0; i < len - 2; i++) {
        let n1 = nums[i]
        if (n1 > 0) { //固定值大于0,直接干掉
            break
        }
        if (i > 0 && n1 == nums[i - 1]) { //去重
            continue
        }
        var Left = i + 1
        var Right = len - 1
        while (Left < Right) {
            let n2 = nums[Left]
            let n3 = nums[Right]
            if (n1 + n2 + n3 == 0) {
                res.push([n1, n2, n3])
                while (n2 == nums[Left + 1]) { //这时i不变,需要在这里去重
                    Left++
                }
                while (n3 == nums[Right - 1]) {
                    Right--
                }
                Left++
                Right--
            }
            if (n1 + n2 + n3 < 0) {
                Left++
            }
            if (n1 + n2 + n3 > 0) {
                Right--
            }
        }
    }
    return res
};
var nums = [-1, 0, 1, 2, -1, -4]
var nums = [1, 2, 3, 3, -2, -4, 2]
var nums = [1, -1, -1, 0]

console.log(threeSum(nums))