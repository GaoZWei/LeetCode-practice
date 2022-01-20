//数组转树
// https://juejin.cn/post/6946136940164939813
// 二.数据处理-> 16.将js对象转化为树形结构
var jsontoTree = (source) => {
    var res = []
    var map = new Map()
    for (let i = 0; i < source.length; i++) {
        map.set(source[i].id, source[i])
    }

    for (let i = 0; i < source.length; i++) {
        var parent = map.get(source[i].pid)
        if (parent) {
            (parent.children || (parent.children = [])).push(source[i])
        } else {
            res.push(source[i])
        }
    }
    return res[0]
}

//转换前
var source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 2,
    name: 'div'
}]

console.log(jsontoTree(source))
// 转换为: 
// tree = [{
//             id: 1,
//             pid: 0,
//             name: 'body',
//             children: [{
//                     id: 2,
//                     pid: 1,
//                     name: 'title',
//                     children: [{
//                         id: 3,
//                         pid: 1,
//                         name: 'div'
//                     }]
//                 }
//             }]