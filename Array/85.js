//最大矩形
// 思路:
// 1.初始化每一列
// 2.遍历,判断每一个[row][col]==1
// 3.遍历完一行,求面积(运用84题的方法)
var maximalRectangle = function (matrix) {
    var res = 0
    if (matrix.length == 0) {
        return 0
    }
    // var heights = new Array(matrix[0].length + 1).fill(0) // 开辟空间多添一项0 避免原高度最后一直递增 无法有机会计算
    var heights = new Array(matrix[0].length).fill(0) // 开辟空间多添一项0 避免原高度最后一直递增 无法有机会计算
    var rows = matrix.length
    var cols = matrix[0].length
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) { //每一层 高度会有变化：可能继续增1， 可能直接归零
            if (matrix[row][col] == "1") {
                heights[col] += 1
            } else {
                heights[col] = 0
            }
        }
        res = Math.max(res, largestRectangleArea(heights)) // 每一层 更新一下最大矩形面积
    }
    return res
};

var largestRectangleArea = (heights) => {
    var maxArea = 0
    var heights = [0, ...heights, 0] //处理特殊边界情况
    var stack = []
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            popItem = heights[stack.pop()]
            popArea = popItem * (i - stack[stack.length - 1] - 1)
            maxArea = Math.max(maxArea, popArea)
        }
        stack.push(i)
    }
    return maxArea
}

var matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]

console.log(maximalRectangle(matrix))