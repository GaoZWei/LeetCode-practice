// 39. 组合总和
// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

//回溯
var combinationSum = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    var res = []
    var dfs = (start, tmp, sum) => {
        if (sum >= target) {
            if (sum == target) {
                res.push(tmp.slice())
            }
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > target - sum) continue;
            tmp.push(candidates[i])
            dfs(i, tmp, sum + candidates[i])
            tmp.pop()
        }
    }
    dfs(0, [], 0)
    return res
};

var candidates = [2, 3, 6, 7],
    target = 7
console.log(combinationSum(candidates, target))