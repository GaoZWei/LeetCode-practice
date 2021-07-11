//最大子序和
//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。


// 思路一: 如果i的前一个是小于零,不添加
// 逐渐往后遍历,找到当前的最优解
var maxSubArray = function (nums) {
    var pre = 0;
    var maxItem = nums[0]; //存储最大的和
    for (let i = 0; i < nums.length; i++) {
        pre = Math.max(pre + nums[i], nums[i])
        maxItem = Math.max(pre, maxItem)
    }
    return maxItem
};

//思路二:贪心算法  若当前指针所指元素之前的和小于0,则丢弃当前元素之前的数列
var maxSubArray = function (nums) {
    var sum = 0;
    var ans = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) { //如果之前的sum>0
            sum += nums[i]
        } else {
            sum = nums[i]
        }
        ans = Math.max(ans, sum)
    }
    return ans
}

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))