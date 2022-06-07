// 虚拟DOM转为DOM
// https://juejin.cn/post/6875152247714480136#heading-45

// vnode结构：
// {
//   tag,
//   attrs,
//   children,
// }

function render(vnode, container) {
    container.appendChild(_render(vnode))
}

function _render(vnode) {
    if (typeof vnode == "number") { //number
        vnode = String(vnode)
    }
    if (typeof vnode == "string") { //string
        return document.createTextNode(vnode)
    }
    // 普通DOM
    var dom = document.createElement(vnode.tag)
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach((key) => {
            var value = vnode.attrs[key]
            dom.setAttribute(key, value)
        })
    }
    vnode.children.forEach(child => {
        render(child, dom)
    });
}

// var data={a:1,b:2,c:9,d:4,e:5};
// console.log(Object.keys(data));//["a", "b", "c", "d", "e"]