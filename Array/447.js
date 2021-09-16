// 447. 回旋镖的数量
// 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。
// 回旋镖 是由点 (i, j, k) 表示的元组 ，其中 i 和 j 之间的距离和 i 和 k 之间的欧式距离相等（需要考虑元组的顺序）。
// 返回平面上所有回旋镖的数量。
// 输入：points = [[0,0],[1,0],[2,0]]
// 输出：2
// 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]


//把当前点作为V的顶点,找和他距离相同的点,统计数量放入map中
var numberOfBoomerangs = function (points) {
    var res = 0
    for (var p of points) {
        var map = new Map()
        for (var q of points) {
            var distance = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
            map.set(distance, (map.get(distance) || 0) + 1)
        }
        for (var m of map.values()) {
            res += m * (m - 1)
        }
    }
    return res
};

var points = [
    [0, 0],
    [1, 0],
    [2, 0]
]
console.log(numberOfBoomerangs(points))