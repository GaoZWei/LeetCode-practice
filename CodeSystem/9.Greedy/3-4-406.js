// 406. 根据身高重建队列
// 假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。
// 每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面 正好 有 ki 个身高大于或等于 hi 的人。
// 请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue ，
// 其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。

var reconstructQueue = function (people) {
    var queue = []
    people.sort((a, b) => { //step1:按身高排序,相同的k较小的在前
        if (a[0] !== b[0]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1]
        }
    })
    for (let i = 0; i < people.length; i++) { //step2:splice处理,按k插入对应下标即可
        queue.splice(people[i][1], 0, people[i])
    }
    return queue
};
var people = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
]
console.log(reconstructQueue(people));