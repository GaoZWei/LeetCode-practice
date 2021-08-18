// 组合总和 III
// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
// 说明：
// 所有数字都是正整数。解集不能包含重复的组合。 
// 示例 1:
// 输入: k = 3, n = 7
// 输出: [[1,2,4]]


// 思路:直接用回溯
var combinationSum3 = function (k, n) {
    var arr = []
    var dfs = (start, tmp, sum) => {
        if (tmp.length == k) { //终止条件
            if (sum == n) {
                arr.push(tmp.slice())
            }
            return;
        }
        for (let i = start; i <= 9; i++) {
            tmp.push(i)
            // sum += i 不能写,要不然回溯会出问题
            dfs(i + 1, tmp, sum + i)
            tmp.pop()
        }
    }
    dfs(1, [], 0)
    return arr
};

// var combinationSum3 = (k, n) => {
//     const res = [];
//     // 基于当前已选的comb数组(和为sum)，在数start到数9中继续选
//     const dfs = (start, comb, sum) => {
//         if (comb.length == k) { // 选够k个数 结束递归
//             if (sum == n) { // 组合中数之和等于n
//                 res.push(comb.slice()); // 将它的拷贝加入解集
//             }
//             return;
//         }
//         for (let i = start; i <= 9; i++) { // 枚举出所有的选择（选项）
//             comb.push(i); // 作出一个选择i
//             dfs(i + 1, comb, sum + i); // 基于该选择i，往下递归
//             comb.pop(); // 撤销这个选择
//         }
//     };

//     dfs(1, [], 0); // 入口
//     return res;
// };

var k = 3
var n = 7
console.log(combinationSum3(k, n))