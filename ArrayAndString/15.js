//移除元素
// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 给定 nums = [3,2,2,3], val = 3,
// 函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
// 你不需要考虑数组中超出新长度后面的元素。

// 给定 nums = [0,1,2,2,3,0,4,2], val = 2,
// 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
// 注意这五个元素可为任意顺序。
// 你不需要考虑数组中超出新长度后面的元素。

//直接遍历
var removeElement = function (nums, val) {
    var index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i]
            index++
        }
    }
    return index
};

//of遍历 (ES6)
var removeElement = function (nums, val) {
    let ans = 0;
    for (const num of nums) {
        if (num != val) {
            nums[ans] = num;
            ans++;
        }
    }
    return ans;
};

// 指向头尾的双指针(把不等于的全部放到前面)
// 遇到等于val的项，就拿数组的末尾项覆盖它
// 末尾项搬到前面来了，将尾指针左移一位
// 如果遇到不同于val的项，左指针就+1，考察下一项
// 循环结束的条件是两个指针交叉相遇

var removeElement = function (nums, val) {
    var index = 0
    var last = nums.length - 1
    while (index <= last) {
        if (nums[index] === val) {
            nums[index] = nums[last]//覆盖掉val
            last--
        } else {
            index++
        }
    }
    return index
};


//splice删除
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};

var nums = [0, 1, 2, 2, 3, 0, 4, 2]
var val = 2
console.log(removeElement(nums, val));