// 全排列2
// 给定一个可包含重复数字的序列nums ，按任意顺序返回所有不重复的全排列。

// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
//  输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
var permuteUnique = function (nums) {
    var len = nums.length
    nums.sort((a, b) => a - b) //先排个序
    var arr = [],
        tmp = [],
        used = []
    const permute = () => {
        if (tmp.length == len) {
            arr.push(tmp.slice())
            return
        }
        for (let i = 0; i < len; i++) {
            if (used[i]) { //used 数组记录使用过的数字，使用过了就不再使用
                continue
            }
            if (i - 1 >= 0 && nums[i - 1] == nums[i] && !used[i - 1]) { //对应上面第二点，如果当前的选项nums[i]，与同一层的前一个选项nums[i-1]相同，且nums[i-1]存在，且没有被使用过，则忽略选项nums[i]。
                continue
            }
            tmp.push(nums[i])
            used[i] = true
            permute()
            tmp.pop()
            used[i] = false
        }
    }
    permute()
    return arr
};
var nums = [1, 1, 2]
console.log(permuteUnique(nums))