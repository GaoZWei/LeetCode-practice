// 473. 火柴拼正方形
// 输入为小女孩拥有火柴的数目，每根火柴用其长度表示。输出即为是否能用所有的火柴拼成正方形。

//累加+除以4(不可以)  每根火柴长度不同,不能拆开
var makesquare = function (nums) {
    var sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (sum % 4 == 0) {
        return true
    }
    return false
}

//需要求和 以及 是否能相加为边长   (不可行,因为不一定,只有两个火柴长度相加,也可能是好多火柴相加)
var makesquare = function (nums) {
    nums.sort((a, b) => a - b)
    var sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (sum % 4 != 0) {
        return false
    }
    var side = sum / 4 //每一个边的边长
    var left = 0,
        right = nums.length - 1
    var count = 0
    while (left < right) {
        if (nums[right] > side) {
            return false
        } else if (nums[right] == side) {
            right--
            count++
        } else if (nums[left] + nums[right] == side) {
            left++
            right--
            count++
        } else {
            return false
        }
    }
    if (count == 4) {
        return true
    }
    return false
}
//排序+深度优先搜索
var makesquare = function (nums) {
    var add = 0
    for (let i = 0; i < nums.length; i++) {
        add += nums[i]
    }
    if (add % 4 != 0) return false
    var target = add / 4
    var sum = new Array(4).fill(0)
    nums.sort((a, b) => b - a)
    const dfs = (index) => {
        if (index == nums.length) {
            return sum[0] == sum[1] && sum[1] == sum[2] && sum[2] == sum[3]
        }
        var currentLen = nums[index]
        for (let i = 0; i < sum.length; i++) {
            if (sum[i] + currentLen <= target) {
                sum[i] += currentLen
                if (dfs(index + 1)) {
                    return true
                }
                sum[i] -= currentLen
            }
        }
        return false
    }
    return dfs(0)
}

var nums = [1, 1, 2, 2, 2]
// var nums = [3, 3, 3, 3, 4]
// var nums = [5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]
console.log(makesquare(nums))