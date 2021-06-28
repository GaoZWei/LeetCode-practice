// 最接近的三数之和

// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，
// 使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

// 输入：nums = [-1,2,1,-4], target = 1
// 输出：2
// 解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。

//自己做的
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => {
        return a - b
    })
    var len = nums.length;
    if (len < 3) {
        return;
    }
    var closesum = Math.abs(nums[0] + nums[1] + nums[len - 1] - target); //初始差值
    var sum;
    for (let i = 0; i < len - 2; i++) {
        var n1 = nums[i]
        var Left = i + 1;
        var Right = len - 1
        while (Left < Right) {
            var n2 = nums[Left]
            var n3 = nums[Right]
            if (closesum > Math.abs(n1 + n2 + n3 - target)) {
                closesum = Math.abs(n1 + n2 + n3 - target)
                sum = n1 + n2 + n3
            }
            //!!!!这块必须有一个能够判断  和  与目标大小的值,不能直接加绝对值,没法移动指针
            if (closesum > 0) {   
                return target;
            }
            Left++
        }
    }
    return sum
};



//way2
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => {
        return a - b
    })
    var len = nums.length;
    if (len < 3) {
        return;
    }
    var min = +Infinity //无穷大
    var sum;
    for (let i = 0; i < len - 2; i++) {
        var n1 = nums[i]
        var Left = i + 1;
        var Right = len - 1
        while (Left < Right) {
            var n2 = nums[Left]
            var n3 = nums[Right]
            var res = n1 + n2 + n3 - target //差值
            if (min > Math.abs(res)) {
                min = Math.abs(res)
                sum = n1 + n2 + n3
            }
            if (res >= 0) {
                Right--
            } else {
                Left++
            }
        }
    }
    return sum
};


//way3类似
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[nums.length - 1];

    for (let i = 0; i < nums.length - 2; i++) {
        const n1 = nums[i];
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const n2 = nums[l];
            const n3 = nums[r];
            const sum = n1 + n2 + n3;
            if (sum > target) {
                r--;
            } else {
                l++;
            }
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum;
            }
        }
    }
    return res;
};



var nums = [-1, 2, 1, -4]
// var nums = [-1, 2, 1, 1]
var target = 1
console.log(threeSumClosest(nums, target))