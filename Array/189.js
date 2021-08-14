// 旋转数组

// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

// 进阶：
// 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
// 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？

// 思路1:
// 辅助数组,直接放里面
var rotate = function (nums, k) {
    var n = nums.length
    if (k > n) {
        k = k % n
    }
    var arr = []
    for (let i = n - k; i < n; i++) {
        arr.push(nums[i])
    }
    for (let j = 0; j < n - k; j++) {
        arr.push(nums[j])
    }
    for (let i = 0; i < n; i++) {
        nums[i] = arr[i]
    }
    return nums
};

// 思路2:(同1)
// 放在新数组里面
var rotate = function (nums, k) {
    var n = nums.length
    var arr = []
    for (let i = 0; i < n; i++) {
        arr[(i + k) % n] = nums[i] //核心代码
    }
    for (let i = 0; i < n; i++) {
        nums[i] = arr[i]
    }
    return nums
}

// 思路3:
// 双reverse
var rotate = function (nums, k) {
    var n = nums.length
    if (n == 1) {
        return nums
    }
    if (k > n) {
        k = k % n
    }
    var tmp;
    //第一次旋转
    for (let i = 0; i < n / 2; i++) {
        tmp = nums[i]
        nums[i] = nums[n - i - 1]
        nums[n - i - 1] = tmp
    }
    //第二次旋转
    for (let i = 0; i < k / 2; i++) {
        tmp = nums[i]
        nums[i] = nums[k - i - 1]
        nums[k - i - 1] = tmp
    }
    for (let i = k; i < (n + k) / 2; i++) {
        tmp = nums[i]
        nums[i] = nums[n + k - i - 1]
        nums[n + k - i - 1] = tmp
    }
    return nums
}

// 思路4:
// 循环移位
// j = (j + k) % nums.length; //每个数字移动后的索引
// 1.从头设置tmp,
// 2.从nums[0]找0位置元素应该放在哪,向后逐渐推
// 3.当回到原点,从下一个开始推
// 4.所有都遍历完了,就停止
var rotate = function (nums, k) {
    var count = nums.length
    var j = 0,
        tmp = nums[0]
    var start = j //start判断是否循环交换了(回到原点)
    while (count-- > 0) { //遍历所有
        j = (j + k) % nums.length;
        [tmp, nums[j]] = [nums[j], tmp]
        if (j == start) {
            j = (j + 1) % nums.length
            start = j
            tmp = nums[j]
        }
    }
    return nums;
};

var nums = [1, 2, 3, 4, 5, 6, 7],
    k = 3
var nums = [-1, -100, 3, 99],
    k = 2
var nums = [1, 2]
k = 3
console.log(rotate(nums, k))