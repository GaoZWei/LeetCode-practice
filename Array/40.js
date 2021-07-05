// 组合总和2
//给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的每个数字在每个组合中只能使用一次

// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 所求解集为:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

// 我们关心当下有什么选择，作了一个选择之后，会怎么限制下一个选择。目标是什么

// 套路做法（可硬记）
// 用 for 循环去枚举出所有的选择
// 做出一个选择
// 基于这个选择，继续往下选择（递归）
// 上面的递归结束了，撤销这个选择，进入 for 循环的下一次迭代

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    var arr = []
    const dfs = (start, tmp, sum) => {
        if (sum >= target) {
            if (sum == target) {
                arr.push(tmp.slice())
            }
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i - 1 >= start && candidates[i] == candidates[i - 1]) { //去重,至少遍历到循环的第二个
                continue
            }
            tmp.push(candidates[i])
            dfs(i + 1, tmp, sum + candidates[i])
            tmp.pop()
        }
    }
    dfs(0, [], 0)
    return arr
};

var candidates = [10, 1, 2, 7, 6, 1, 5]
var target = 8


console.log(combinationSum2(candidates, target))