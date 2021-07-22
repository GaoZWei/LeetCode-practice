// 删除有序数组中的重复项 II

// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

//思路1:
// splice (官方不通过),可能和splice内存有关
var removeDuplicates = function (nums) {
    if (nums.length <= 2) {
        return nums.length
    }
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] == nums[i - 2]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums
};

// 官方解
// 快慢指针
// slow表示处理过的长度
// fast表示检查过的长度
var removeDuplicates = function (nums) {
    var len = nums.length
    if (len <= 2) {
        return len
    }
    var slow = 2
    var fast = 2
    while (fast < len) {
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
        // console.log(nums)
    }
    return slow
}

var nums = [1, 1, 1, 2, 2, 3]
var nums = [1, 1, 1, 2, 2, 3]
console.log(removeDuplicates(nums))