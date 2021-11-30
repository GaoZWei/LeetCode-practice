// 27. 移除元素(快慢指针)
// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

//暴力
var removeElement = function (nums, val) {
    var n = nums.length
    for (let i = 0; i < n; i++) {
        if (nums[i] == val) {
            for (let j = i + 1; j < n; j++) {
                nums[j - 1] = nums[j]
            }
            i--
            n--
        }
    }
    return n
};

//快慢指针
var removeElement = function (nums, val) {
    var n = nums.length
    var k = 0
    for (let i = 0; i < n; i++) {
        if (nums[i] != val) {
            nums[k++] = nums[i]
        }
    }
    return k
}

var nums = [3, 2, 2, 3],
    val = 3
console.log(removeElement(nums, val))