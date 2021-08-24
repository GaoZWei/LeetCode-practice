// 除自身以外数组的乘积
// 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，
// 其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
// 输入: [1,2,3,4]
// 输出: [24,12,8,6]
// 时间O(n), 空间O(1)

// 思路:
// 直接算第一个,算完,放在最后 时间n的2次方,空间o(1)   (超出时间限制)
var productExceptSelf = function (nums) {
    var res = []
    for (let i = 0; i < nums.length; i++) {
        var tmp = nums[0]
        var product = 1;
        for (let j = 1; j < nums.length; j++) {
            product *= nums[j]
        }
        res.push(product)
        nums.splice(0, 1)
        nums.push(tmp)
    }
    return res
};

//失败了
var productExceptSelf = function (nums) {
    var res = []
    var tmp; //中间变量
    var product = 1; //乘积
    var count = 0 //计数,多少次
    // for (let j = 1; j < nums.length; j++) {
    var j = 1
    while (j < nums.length) {
        tmp = nums[0]
        product *= nums[j]
        j++
        if (j == nums.length - 1 && count < nums.length) {
            res.push(product)
            nums.splice(0, 1)
            nums.push(tmp)
            product = 1;
            j = 1
            count++
        }
        if (count == nums.length) {
            break
        }
    }
    // }
    return res
};


//思路:
// 左边积*右边积
var productExceptSelf = function (nums) {
    var n = nums.length
    var output = []
    output[0] = 1
    for (let i = 1; i < n; i++) { //左边积
        output[i] = output[i - 1] * nums[i - 1]
    }
    var right_product = 1 //用变量存储右边积
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= right_product
        right_product *= nums[i]
    }
    return output
}

var nums = [1, 2, 3, 4]
var nums = [2, 3, 5, 4]
console.log(productExceptSelf(nums))