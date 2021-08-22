// 228. 汇总区间
// 给定一个无重复元素的有序整数数组 nums 。
// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表。也就是说，
// nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
// 列表中的每个区间范围 [a,b] 应该按如下格式输出：

// "a->b" ，如果 a != b
// "a" ，如果 a == b

// 输入：nums = [0,1,2,4,5,7]
// 输出：["0->2","4->5","7"]
// 解释：区间范围是：
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"

// 思路:
// 从前往后遍历
// 找区间,得到区间列表
// 判断区间low与high的关系
var summaryRanges = function (nums) {
    var arr = []
    var i = 0
    var n = nums.length
    while (i < n) {
        var low = i
        i++
        while (i < n && nums[i] == (nums[i - 1] + 1)) {
            i++
        }
        high = i - 1
        var tmp = ["" + nums[low]]
        if (low < high) {
            tmp.push("->")
            tmp.push("" + nums[high])
        }
        arr.push(tmp.join('')) //只是把它连接成字符串,中间什么也不加
    }
    return arr
};


// 思路2:
// 可以直接遍历,用一个start直接进行标识开始即可
var summaryRanges = function (nums) {
    if (!nums.length) return []
    var start = nums[0]
    var arr = []
    for (let i = 1; i <= nums.length; i++) { //这块注意一定是<=,只有这样,最后一个才能显示
        if (nums[i - 1] !== nums[i] - 1) {
            var tmp = start !== nums[i - 1] ? start + "->" + nums[i - 1] : start + ""
            arr.push(tmp)
            start = nums[i]
        }
    }
    return arr
};


var nums = [0, 1, 2, 4, 5, 7]
console.log(summaryRanges(nums))