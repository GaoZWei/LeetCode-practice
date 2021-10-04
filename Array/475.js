// 475. 供暖器
// 设计一个有固定加热半径的供暖器向所有房屋供暖。
// 在加热器的加热半径范围内的每个房屋都可以获得供暖。
// 现在，给出位于一条水平线上的房屋 houses 和供暖器 heaters 的位置，请你找出并返回可以覆盖所有房屋的最小加热半径。

// 输入: houses = [1,2,3], heaters = [2]
// 输出: 1
// 解释: 仅在位置2上有一个供暖器。如果我们将加热半径设为1，那么所有房屋就都能得到供暖。

// 思路:遍历所有房子同时,用二分法遍历加热器,算出加热器离房子的最小距离
var findRadius = function (houses, heaters) {
    heaters.sort((a, b) => a - b)
    var m = heaters.length
    var ans = 0
    for (let i = 0; i < houses.length; i++) {
        var house = houses[i]
        var targetPos = binarySearch(heaters, 0, m - 1, house)
        var closestDistance = Infinity
        if (heaters[targetPos] == house) {
            ans = Math.max(ans, 0)
            continue
        }
        //比较 前一个 和 后一个 得到最小值
        var pre = heaters[targetPos - 1]
        var cur = heaters[targetPos]
        if (pre != undefined) {
            closestDistance = Math.min(closestDistance, Math.abs(house - pre))
        }
        closestDistance = Math.min(closestDistance, Math.abs(house - cur))

        ans = Math.max(ans, closestDistance)
    }
    return ans
};

var binarySearch = (array, start, end, target) => {
    while (start < end) {
        var mid = Math.floor((start + end) / 2)
        var middle = array[mid]
        if (target > middle) {
            start = mid + 1
        } else {
            end = mid
        }
    }
    return start
}
var houses = [1, 2, 3, 4],
    heaters = [1, 4]
var houses = [1, 5],
    heaters = [2]
console.log(findRadius(houses, heaters))