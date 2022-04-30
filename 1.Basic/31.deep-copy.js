// 简单深拷贝实现

// function cloneDeep3(source, hash = new WeakMap()) {

//     if (!isObject(source)) return source;
//     if (hash.has(source)) {
//         var target = hash.get(source)
//         console.log('11111', target);
//         return hash.get(source); // 新增代码，查哈希表
//     }
//     var target = Array.isArray(source) ? [] : {};
//     hash.set(source, target); // 新增代码，哈希表设值
//     console.log("source:", source);
//     console.log("target:", target);
//     for (var key in source) {
//         if (Object.prototype.hasOwnProperty.call(source, key)) {
//             if (isObject(source[key])) {
//                 target[key] = cloneDeep3(source[key], hash); // 新增代码，传入哈希表
//             } else {
//                 target[key] = source[key];
//             }
//         }
//     }
//     return target;
// }

// function isObject(obj) {
//     return typeof obj === 'object' && obj != null;
// }


function isObject(obj) {
    return typeof obj === "object" && obj != null
}
// 结合数组实现(基本款)
function cloneDeep2(source) {

    if (!isObject(source)) return source
    var target = Array.isArray(source) ? [] : {}

    for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = cloneDeep2(source[key])
            } else {
                target[key] = source[key]
            }
        }
    }
    return target
}

//解决循环引用
function cloneDeep3(source, hash = new WeakMap()) {

    if (!isObject(source)) return source
    if (hash.has(source)) return hash.get(source)

    var target = Array.isArray(source) ? [] : {}
    hash.set(source, target) //核心就是,引用的是地址,所以target变化,hash中的target也变化(想的简单点)
    for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = cloneDeep3(source[key], hash)
            } else {
                target[key] = source[key]
            }
        }
    }
    return target
}


var a = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    },
    a1: undefined,
    a2: null,
    a3: 123
}

// var b = cloneDeep2(a);
// console.log(b);

a.circleRef = a;
var b = cloneDeep3(a);
console.log(b);