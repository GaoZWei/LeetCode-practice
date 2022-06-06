// 打印出当前网页使用了多少种HTML元素
function statistic() {
    return [...new Set([...document.querySelectorAll('*')].map(el => el.tagName))].length;
}

// 1.document.querySelectorAll('*')
// 2.[...document.querySelectorAll('*')].map(el => el.tagName)
// 3. ...new Set()
// 4.length

// 1.查节点
// 2.展开数组
// 3.map过滤
// 4.set去重
// 5.展开数组
// 6.length