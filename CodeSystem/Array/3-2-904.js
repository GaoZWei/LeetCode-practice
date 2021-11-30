// 904. 水果成篮
// 在一排树中，第 i 棵树产生 tree[i] 型的水果。
// 你可以从你选择的任何树开始，然后重复执行以下步骤：
// 把这棵树上的水果放进你的篮子里。如果你做不到，就停下来。
// 移动到当前树右侧的下一棵树。如果右边没有树，就停下来。
// 请注意，在选择一颗树后，你没有任何选择：你必须执行步骤 1，然后执行步骤 2，然后返回步骤 1，然后执行步骤 2，依此类推，直至停止。
// 你有两个篮子，每个篮子可以携带任何数量的水果，但你希望每个篮子只携带一种类型的水果。
// 用这个程序你能收集的水果树的最大总量是多少？

// 滑动窗口
// 解决方法：n
// 记录 每一次水果品种发生变化 且 是该水果品种第一次出现 时的索引
// 当遇到第三种水果时，n 就是上一种水果的第一次出现的起始位置，也是左指针的位置
var totalFruit = function (fruits) {
    var left = 0
    var n = 0
    var arr = [fruits[left]]
    var maxLen = 0
    for (let r = 0; r < fruits.length; r++) {
        if (!arr.includes(fruits[r])) {
            if (arr.length <= 1) {
                arr[1] = fruits[r]
            } else {
                left = n //左边界
                arr[0] = fruits[r - 1]
                arr[1] = fruits[r]
            }
        }
        if (fruits[r] != fruits[n]) { //进来新水果,更新n
            n = r
        }
        // console.log(n)
        maxLen = Math.max(maxLen, r - left + 1)
    }
    return maxLen
};

var fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]
// var fruits = [1, 2, 1]
console.log(totalFruit(fruits))