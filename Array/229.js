// 求众数 II
// 给定一个大小为 n 的整数数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
// 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。
// 输入：[3,2,3]
// 输出：[3]

// 思路:
// 直接判断个数是否满足条件 (暂时不可行)
var majorityElement = function (nums) {
    var n = nums.length
    var manyNum = Math.floor(n / 3)
    var arr = []
    var map = new Map()
    for (let i = 0; i < n; i++) {
        if (map.has(nums[i])) {
            var itemNum = map.get(nums[i])
            map.set(nums[i], itemNum + 1)
            // if (map.get(nums[i]) > manyNum) {
            //     arr.push(nums[i])
            // }
        } else {
            map.set(nums[i], 1)
            // if (map.get(nums[i]) > manyNum) {
            //     arr.push(nums[i])
            // }
        }
    }
    for (let [key, value] of map) {
        // console.log(value)
        if (value > manyNum) {
            arr.push(key)
        }
    }
    return arr
};

// 摩尔投票法
var majorityElement = function (nums) {
    var n = nums.length
    var x1 = nums[0],
        x2 = nums[0],
        count1 = 0,
        count2 = 0
    for (let x of nums) { //核心
        if (x1 == x) {
            count1++
        } else if (x2 == x) {
            count2++
        } else if (count1 == 0) {
            x1 = x
            count1++
        } else if (count2 == 0) {
            x2 = x
            count2++
        } else {
            count1--
            count2--
        }
    }
    var manyNum = Math.floor(n / 3)
    var arr = []
    if (count1 > 0 && nums.filter(x => x == x1).length > manyNum) { //过滤出x1,x2
        arr.push(x1)
    }
    if (count2 > 0 && nums.filter(x => x == x2).length > manyNum) {
        arr.push(x2)
    }
    return arr
}
var nums = [3, 2, 3]
var nums = [1, 1, 1, 3, 3, 2, 2, 2]
var nums = [1]
var nums = [2, 2]
console.log(majorityElement(nums))