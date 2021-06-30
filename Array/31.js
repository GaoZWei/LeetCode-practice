//下一个排列
// 实现获取 下一个排列 的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

// 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
// 必须 原地 修改，只允许使用额外常数空间。

// 思路:
// 1.从右往左求第一个非递减值a,在a右边求第一个比他大的值b,两者交换
// 2.b右边单减,右边的值换成单增


//自己的写法
var nextPermutation_1 = function (nums) {
    var len = nums.length
    if (len == 1) {
        return nums
    }
    var a;
    var a_index = 0;
    for (let i = len - 1; i >= 0; i--) { //先找第一个非递减值a
        if (nums[i] > nums[i - 1]) {
            a = nums[i - 1]
            a_index = i - 1
            break
        } else if (i == 0 && nums[i + 1] < nums[i]) {
            return nums.reverse()
        }
    }
    for (let j = len - 1; j > a_index; j--) { //右边求出第一个比他大的值b,交换
        if (nums[j] > a) {
            nums[a_index] = nums[j]
            nums[j] = a
            break
        }
    }
    let left = a_index + 1 //把右边的值改成单增
    let right = len - 1
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++;
        right--
    }
    return nums
};



//网上的写法
var nextPermutation_2 = function (nums) {
    var len = nums.length
    if (len == 1) {
        return nums
    }
    let i = nums.length - 2; // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
    while (i >= 0 && nums[i] >= nums[i + 1]) { // 寻找第一个小于右邻居的数
        i--;
    }
    var a = nums[i];
    var a_index = i;
    for (let i = len - 1; i >= 0; i--) { //先找第一个非递减值a
        if (nums[i] > nums[i - 1]) {
            a = nums[i - 1]
            a_index = i - 1
            break
        } else if (i == 0 && nums[i + 1] < nums[i]) {
            return nums.reverse()
        }
    }
    if (i >= 0) {
        for (let j = len - 1; j > a_index; j--) { //右边求出第一个比他大的值b,交换
            if (nums[j] > a) {
                nums[a_index] = nums[j]
                nums[j] = a
                break
            }
        }
    }
    let left = a_index + 1 //把右边的值改成单增
    let right = len - 1
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++;
        right--
    }
    return nums
};



var nums = [1, 2, 3]
var nums = [1, 2, 4, 3]
var nums = [3, 2, 1]
var nums = [1, 3, 2]
console.log(nextPermutation_1(nums))
console.log(nextPermutation_2(nums))