// 40. 组合总和 II
// 给你一个由候选元素组成的集合 candidates 和一个目标数 target ，
// 找出 candidates 中所有可以使数字和为 target 的组合。
// 每个元素在每个组合中只能用一次

var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    var res = []
    var path = []
    var dfs = (start, sum) => {
        if (sum >= target) {
            if (sum == target) {
                res.push(path.slice())
            }
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i - 1 >= start && candidates[i - 1] == candidates[i]) { // 当前选项和左邻选项一样，跳过
                continue;
            }
            path.push(candidates[i])
            dfs(i + 1, candidates[i] + sum)
            path.pop()
        }
    }
    dfs(0, 0)
    return res
};
var candidates = [10, 1, 2, 7, 6, 1, 5],
    target = 8
console.log(combinationSum2(candidates, target))