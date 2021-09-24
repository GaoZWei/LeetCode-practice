// 457. 环形数组是否存在循环
// 判断环形数组是否有环,环的方向相同,全正/全负

// 输入：nums = [2,-1,1,2,2]
// 输出：true
// 解释：存在循环，按下标 0 -> 2 -> 3 -> 0 。循环长度为 3 。

var circularArrayLoop = function (nums) {
    var n = nums.length
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) continue //注意需要写
        var slow = i
        var fast = next(nums, i)
        while (nums[slow] * nums[fast] > 0 && nums[slow] * nums[next(nums, fast)] > 0) {
            if (slow == fast) {
                if (slow != next(nums, slow)) {
                    return true
                } else {
                    break
                }
            }
            slow = next(nums, slow)
            fast = next(nums, next(nums, fast))
        }
        let add = i
        while (nums[add] * nums[next(nums, add)] > 0) { //把遍历过的置为0
            const tmp = add
            add = next(nums, add)
            nums[tmp] = 0
        }
    }
    return false
}
var next = (nums, i) => {
    var n = nums.length
    return ((i + nums[i]) % n + n) % n //+n因为会存在负数   把结果控制在[0,n)
}
var nums = [2, -1, 1, 2, 2]
console.log(circularArrayLoop(nums))