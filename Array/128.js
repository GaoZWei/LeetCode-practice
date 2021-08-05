// 最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
// 输入：nums = [100,4,200,1,3,2]
// 输出：4
// 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

// 思路1:
// 先排序,去重,再判断  (这种还不行,可以从后面连续)
var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b)
    if (nums.length == 1) {
        return 1
    }
    //去重
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            nums.splice(i, 1)
        }
    }
    console.log(nums)
    //判断
    var pre, cur;
    for (let i = 1; i < nums.length; i++) {
        pre = nums[i - 1]
        cur = nums[i]
        if (cur - pre != 1) {
            return i
        }
    }
    return nums.length
};


// 思路2:
// 先排序,去重,再判断  
var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b)
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] == nums[i - 1]) {
    //         nums.splice(i, 1)
    //     }
    // }
    //去重
    var newArr = [];
    for (var i = 0; i < nums.length; i++) {
        if (newArr.indexOf(nums[i]) == -1) {
            newArr.push(nums[i])
        }
    }
    if (newArr.length == 1) {
        return 1
    }
    nums = newArr
    //判断
    var maxsequence = 0
    var sequence_begin = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - nums[i - 1] != 1) {
            maxsequence = Math.max(maxsequence, i - sequence_begin) //获得当前的最大序列
            sequence_begin = i //从当前元素开始判断接下来是否连续
        } else if (i == nums.length - 1 && nums[i] - nums[i - 1] == 1) { //最后一项且依然连续
            maxsequence = Math.max(maxsequence, i - sequence_begin + 1)
        }
    }
    return maxsequence
};

//思路3:
// 类似2,但是用count计数就可以忽略掉重复的了
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0
    nums.sort((a, b) => a - b)
    var count = 1
    var max = 1
    for (let i = 0; i < nums.length; i++) {
        var cur = nums[i]
        var next = nums[i + 1]
        if (cur == next) { //与下一个相同则忽略
            continue
        }
        if (next - cur == 1) {
            count++
        } else {
            count = 1
        }
        max = Math.max(max, count)
    }
    return max
}

//思路4:
// 用set来找左邻居,没有左邻居则为起点
// 然后while找到右邻居满足条件的
// (借用set去重＋找左右邻居)!!!
var longestConsecutive = function (nums) {
    var set = new Set(nums)
    var max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) { //没有左邻居,则为起点
            var cur = nums[i]
            var count = 1
            while (set.has(cur + 1)) {
                cur++
                count++
            }
            max = Math.max(max, count)
        }
    }
    return max
}

// 思路5:哈希表
var longestConsecutive = function (nums) {
    var map = new Map()
    var max = 0
    for (let num of nums) {
        if (!map.has(num)) {
            let preLen = map.get(num - 1) || 0 //获取左邻居连续长度
            let nextLen = map.get(num + 1) || 0 //获取右邻居连续长度
            let curLen = preLen + 1 + nextLen //新序列长度
            map.set(num, curLen) //将该num放入表中
            max = Math.max(max, curLen)
            map.set(num - preLen, curLen) //更新左侧
            map.set(num + nextLen, curLen) //更新右侧
        }
    }
    return max
}


var nums = [100, 4, 200, 1, 3, 2]
var nums = nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// var nums = [1, 2]
// var nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]
// var nums = [0, 0]
// var nums = [-2, -3, -3, 7, -3, 0, 5, 0, -8, -4, -1, 2]
console.log(longestConsecutive(nums)) //9