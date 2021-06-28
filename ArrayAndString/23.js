// 移动零

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// 直接交换
var moveZeroes = function (nums) {
    if (nums.length < 2) {
        return nums
    }
    let tmp = 0 //tmp指向0存在的位置
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            if (nums[tmp] == 0) {
                nums[tmp] = nums[i]
                nums[i] = 0
            }
            tmp++
        }
    }
    return nums
};
//splice+push (有问题)
var moveZeroes_two = function (nums) {
    if (nums.length < 2) {
        return nums
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) { //这块如果用while(nums[i] == 0),会在末尾一直处理,出现死循环
            nums.splice(i, 1) //splice会改变原始数组
            console.log(nums) //验证splice的变化
            nums.push(0)
            // console.log(nums.length)
        }
    }
    return nums
};

//splice+push (正常)
function moveToEnd(arr) {
    let count = 0; //用count来防止死循环
    for (let i = 0; i < arr.length - count; i++) {
        while (arr[i] === 0) { //!!!一直对i=1判断,直到它不是0
            arr.splice(i, 1);
            arr.push(0);
            count++;
            console.log(i) //验证i的变化
        }
    }
    return arr;
}
// var nums = [0, 1, 0, 3, 4, 0, 12]
// var nums = [0, 1, 0, 4, 0, 12]
var nums = [0, 1, 0, 0, 4, 0, 12]
console.log(moveToEnd(nums))