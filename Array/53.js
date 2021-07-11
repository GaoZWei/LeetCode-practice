//最大子序和
//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。


// 思路一: 贪心算法 
// 逐渐往后遍历,找到当前的最优解
var maxSubArray = function (nums) {
    var pre = 0;
    var maxItem = nums[0]; //存储最大的和
    for (let i = 0; i < nums.length; i++) {
        // 等价于 f(i)=max(f(i-1)+nums[i],nums[i])    用  f(i) 代表以第 i 个数结尾的「连续子数组的最大和」!!!  
        pre = Math.max(pre + nums[i], nums[i]) //动态规划转移方程 
        // console.log(pre)
        maxItem = Math.max(pre, maxItem)
    }
    return maxItem
};

//思路二:贪心算法  若当前指针所指元素之前的和小于0,则丢弃当前元素之前的数列   (思路一 与 思路二 等价)
var maxSubArray = function (nums) {
    var sum = 0;
    var maxItem = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) { //如果之前的sum>0,增益
            sum += nums[i]
        } else {
            sum = nums[i]
        }
        maxItem = Math.max(maxItem, sum)
    }
    return maxItem
}

//思路三:动态规划   如果i的前一个是大于零,添加
var maxSubArray = function (nums) {
    var len = nums.length
    var maxItem = nums[0];
    for (let i = 1; i < len; i++) {
        if (nums[i - 1] > 0) {
            nums[i] += nums[i - 1]
        }
        maxItem = Math.max(maxItem, nums[i])
    }
    return maxItem
}
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))