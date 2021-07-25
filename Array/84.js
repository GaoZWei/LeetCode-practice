//柱状图中最大的矩形
// 给定 n 个非负整数， 用来表示柱状图中各个柱子的高度。 每个柱子彼此相邻， 且宽度为 1。
// 求在该柱状图中， 能够勾勒出来的矩形的最大面积。
// 输入： heights = [2, 1, 5, 6, 2, 3]
// 输出： 10
// 解释： 最大的矩形为图中红色区域， 面积为 10



//思路一:
// 暴力破解;  从头双层循环,得出每个所能到的最大矩形
// 双重循环遍历出所有的可能性，在遍历的过程中我们还可以求出最小的高度。
var largestRectangleArea = function (heights) {
    let len = heights.length
    let maxArea = 0
    for (let i = 0; i < len; i++) {
        let minHeight = heights[i]
        for (let j = i; j < len; j++) {
            minHeight = Math.min(minHeight, heights[j])
            maxArea = Math.max(maxArea, minHeight * (j - i + 1))
        }
    }
    return maxArea
};

//思路二:
// 确定一根柱子,分别往前后两方向遍历,若不小于这个柱子,则停止 
// 本质找 该柱子 最大的矩形
var largestRectangleArea = function (heights) {
    let len = heights.length
    let maxArea = 0
    for (let i = 0; i < len; i++) {
        var left = i
        var right = i
        while (left >= 0 && heights[left] >= heights[i]) { //左侧若小于这个柱子,则停止
            left--
        }
        while (right < len && heights[right] >= heights[i]) { //右侧若小于这个柱子,则停止
            right++
        }
        maxArea = Math.max(maxArea, (right - left - 1) * heights[i]) //注意这-1
    }
    return maxArea
}


// 思路三:
// 单调递增栈
// 就是以 i 为中心，分别向左、向右找到第一个小于 heighs[i] 的两个边界，也就是以当前这根 i 柱子所能勾勒出的最大面积。

// 栈来确定左边界,当遍历到的柱子高度小于栈顶的柱子高度时，这时我们找到了右边界(!!!)
var largestRectangleArea = function (heights) {
    var maxArea = 0
    var heights = [0, ...heights, 0] //处理特殊边界情况
    var stack = []
    for (let i = 0; i < heights.length; i++) { //这块的height长度已经变了
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) { //通过栈可以直接找出左侧比他小的!!!!,因为他是单调递增栈,且i就是右边界
            popItem = heights[stack.pop()] //弹出的值
            // console.log(stack, popItem, i)
            popArea = popItem * (i - stack[stack.length - 1] - 1) //面积
            // console.log(popArea)
            maxArea = Math.max(maxArea, popArea)
            // console.log(maxArea)
            // maxArea = Math.max(maxArea, heights[stack.pop()] * (i - stack[stack.length - 1] - 1));
        }
        stack.push(i); //单调递增
    }
    return maxArea
}
var heights = [2, 1, 5, 6, 2, 3]
var heights = [2, 4]
console.log(largestRectangleArea(heights))

// 等价于:
// 一个数组遍历,当遇见的元素比栈顶元素小的的时候,略过,出栈一个,并计算面积
// 相反的话,入栈