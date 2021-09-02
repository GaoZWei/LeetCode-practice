// 寻找重复数
// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 1 到 n 之间（包括 1 和 n），
// 可知至少存在一个重复的整数。
// 假设 nums 只有 一个重复的整数 ，找出 这个重复的数 。
// 空间O(1)
// 输入：nums = [1,3,4,2,2]
// 输出：2

//二分法(值域二分)
var findDuplicate = function (nums) {
    var small = 1
    var big = nums.length - 1
    while (small < big) {
        var mid = Math.floor((small + big) / 2)
        var count = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] <= mid) {
                count++
            }
        }
        if (count > mid) {
            big = mid
        } else {
            small = mid + 1
        }
    }
    return small
};

//快慢指针
var findDuplicate = function (nums) {
    var slow = 0
    var fast = 0
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow == fast) { //首次相遇后,让fast回到原点,保持相同速度  D=S2(推导出来的公式)
            fast = 0
            while (true) {
                if (slow == fast) {
                    return slow
                }
                slow = nums[slow]
                fast = nums[fast]
            }
        }
    }
}

var nums = [1, 3, 4, 2, 2]
console.log(findDuplicate(nums))