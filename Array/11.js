// 11.盛最多水的容器
// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49 
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。

//双层循环
var maxArea = function (height) {
    var len = height.length
    var max = 0;
    for (let i = 0; i < len; i++) {
        for (let j = len - 1; j > 0; j--) {
            var minFromTwo = Math.min(height[i], height[j])
            var area = (j - i) * minFromTwo
            if (area > max) {
                max = area
            }
        }
    }
    return max
};
//双指针
var maxArea = function (height) {
    var len = height.length
    var max = 0;
    for (let i = 0, j = len - 1; i < j;) {
        var minFromTwo = height[i] < height[j] ? height[i++] : height[j--]; //移动指针
        var area = (j - i + 1) * minFromTwo
        if (area > max) {
            max = area
        }
    }
    return max
};
var height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
var height = [1, 1]
var height = [4, 3, 2, 1, 4]

console.log(maxArea(height))