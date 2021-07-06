//缺失的第一个正数
// 给你一个未排序的整数数组 nums， 请你找出其中没有出现的最小的正整数。
// 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
// 输入： nums = [1, 2, 0]
// 输出： 3
// 输入： nums = [3, 4, -1, 1]
// 输出： 2
// 示例 3：
// 输入： nums = [7, 8, 9, 11, 12]
// 输出： 1

var firstMissingPositive = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })
    var positiveIndex;
    var positiveNum;
    for (let k = 0; k < nums.length; k++) {
        if (nums[k] > 0) {
            positiveIndex = k
            break
        }
        if (k == nums.length - 1 && nums[k] <= 0) {
            return 1
        }
    }
    positiveNum = nums.length - positiveIndex //正数的数量
    for (let j = positiveIndex, i = 1; i <= positiveNum; j++, i++) {
        if (nums[j] == i) {
            if (i == positiveNum) {
                return i + 1
            }
            continue
        } else {
            return i
        }
    }
};

//原地交换
// 思路:
// 1.设缺失的数为n,n一定在[1,nums.length+1]范围内
// 2.交换元素 nums[i] 与 nums[nums[i] - 1]交换,精髓!!!!
// 3.判断是否按顺序 
var firstMissingPositive = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] >= 1 && nums[i] < nums.length && nums[i] != nums[nums[i] - 1]) { //while里面放置 下标i 的元素
            var tmp = nums[nums[i] - 1]
            nums[nums[i] - 1] = nums[i]
            nums[i] = tmp
        }
    }

    for (let i = 0; i < nums.length; i++) { //遍历判断
        if (nums[i] != i + 1) {
            return i + 1
        }
    }
    return nums.length + 1
}
var nums = [3, 4, -1, 1]
var nums = [7, 8, 9, 11, 12]
var nums = [1, 2, 0]
var nums = [0]
var nums = [-1, -2, -60, 40, 43]
var nums = [2]
console.log(firstMissingPositive(nums))