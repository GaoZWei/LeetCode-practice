//中心索引
// 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。
// 我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
// 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。



// 思路:双指针,前面向后检索,后面往前检索,判断大小,进行移动
// var pivotIndex = function (nums) {
//     let length = nums.length
//     let i, j
//     let sumLeft = 0;
//     let sumRight = 0;
//     while (i < length) {
//         while (j > 0) {
//             if (sumLeft < sumRight) {
//                 i++
//                 sumLeft += nums[i]
//             } else if (sumLeft > sumRight) {
//                 j--
//                 sumRight += nums[j]
//             } else if (sumLeft = sumRight) {
//                 console.log(123)
//             }
//         }
//         console.log(sumRight)
//     }
// };


//单指针
var pivotIndex = function (nums) {
    var sum = 0;
    var sumleft = 0;
    nums.forEach(num => { //求和
        sum += num
    });
    for (let i = 0; i < nums.length; i++) {
        if (sum - nums[i] - sumleft == sumleft) { //关键 判断是否相等
            return i
        } else {
            sumleft += nums[i]
        }
    }
    return -1
};

//思路清奇,后面比前面的多减去一个,等到left===right时,多减去那个就是中心索引
var pivotIndex = function (nums) {
    let left = 0
    let right = eval(nums.join('+')) - nums[0]
    console.log(right);
    if (left === right) return 0
    for (let i = 1; i < nums.length - 1; i++) {  //思路清奇,后面比前面的多减去一个,等到left===right时,多减去那个就是中心索引
        left += nums[i - 1]
        right -= nums[i]
        if (left === right) return i
    }
    return -1
};


nums = [1, 7, 3, 6, 5, 6]
console.log(pivotIndex(nums));