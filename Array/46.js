//全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

//双层循环不可行
var permute = function (nums) {
    var len = nums.length
    var arr = []
    for (let i = 0; i < len; i++) {
        var tmp = []
        tmp.push(nums[i])
        for (let j = 0; j < len; j++) {
            if (nums[i] != nums[j]) {
                tmp.push(nums[j])
            }
        }
        arr.push(tmp)
    }
    return arr
};


//回溯
// 套路做法（可硬记）
// 用 for 循环去枚举出所有的选择
// 做出一个选择
// 基于这个选择，继续往下选择（递归）
// 上面的递归结束了，撤销这个选择，进入 for 循环的下一次迭代
var permute = function (nums) {
    var len = nums.length
    if (len == 1) {
        return [nums]
    }
    var arr = []
    var tmp = []
    const fill = (tmp) => {
        if (tmp.length == len) { //如果数组长度和nums一样,放入arr
            arr.push(tmp.slice())
            // tmp=[]  这块不用清空  递归而已
            return;
        }
        for (let i = 0; i < len; i++) {
            if (!tmp.includes(nums[i])) { //时间复杂度麻烦
                tmp.push(nums[i])
                // console.log(tmp)
                // console.log(tmp.slice())
                fill(tmp)
                tmp.pop()
            }
        }
    }
    fill(tmp)
    return arr
}


// 需要used数组记录path里都放了哪些元素了
var permute = function (nums) {
    var result = []
    var path = []

    function backtracing(used) {
        if (path.length == nums.length) {
            result.push(path.slice()) //slice 浅拷贝
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[nums[i]]) {
                continue
            }
            used[nums[i]] = true
            path.push(nums[i])
            backtracing(used)
            path.pop()
            used[nums[i]] = false
        }
    }
    backtracing([])
    return result
}

var nums = [1, 2, 3]
console.log(permute(nums))
// 为什么加入解集时，要将数组内容拷贝到一个新的数组里，再加入解集。
// 该 path 变量是一个地址引用，结束当前递归时，将它加入 res，
// 还要进入别的递归分支进行搜索，还要继续传递该 path 给别的递归调用，
// 它所指向的内存空间还要继续被操作，所以 res 中的 path 的内容会被改变，这就不对。
// 所以要弄一份当前的拷贝，放入 res，这样后续对 path 的操作，就不会影响已经放入 res 的内容。