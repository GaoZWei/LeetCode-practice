// 239. 滑动窗口最大值
// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

//单调队列
var maxSlidingWindow = function (nums, k) {
    var q = []
    var res = []
    for (let i = 0; i < nums.length; i++) {
        while (q.length && nums[i] >= nums[q[q.length - 1]]) { //单调递减
            q.pop()
        }
        q.push(i)
        if (q[0] <= i - k) {
            q.shift()
        }
        if (i >= k - 1) {
            res.push(nums[q[0]])
        }
    }
    return res
};
var nums = [1, 3, -1, -3, 5, 3, 6, 7],
    k = 3
console.log(maxSlidingWindow(nums, k))