// 组合之和
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。

// 输入：candidates = [2,3,6,7], target = 7,
// 所求解集为：
// [
//   [7],
//   [2,2,3]
// ]


//不可以用取余
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => { //排序
        return a - b
    })
    var len = candidates.length
    var arr = []
    for (let i = 0; i < len && candidates[i] <= target; i++) {
        var item = candidates[i]
        var remainder = target % item //取余
        var arrItem = []
        if (candidates.includes(remainder)) {
            var itemNum = (target - remainder) / item
            for (let j = 0; j < itemNum; j++) {
                arrItem.push(item)
            }
        } else {
            continue
        }
        arr.push(arrItem)
    }
    return arr
};

//选择递归(深度搜索树)
var combinationSum = function (candidates, target) {
    var arr = []
    const dfs = (start, tmp, sum) => {
        if (sum >= target) { //递归停止条件
            if (sum == target) {
                arr.push(tmp.slice())
            }
            return
        }
        for (let i = start; i < candidates.length; i++) {
            tmp.push(candidates[i])
            dfs(i, tmp, sum + candidates[i])
            tmp.pop()
        }
    }
    dfs(0, [], 0)
    return arr
}
var candidates = [2, 3, 6, 7]
var target = 8
console.log(combinationSum(candidates, target))