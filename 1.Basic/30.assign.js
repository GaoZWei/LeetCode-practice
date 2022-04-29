// Object.assign实现

if (typeof Object.myAssign != "function") {
    Object.defineProperty(Object, "myAssign", {
        value: function (target) {
            if (target == null) {
                throw new Error("target can't convert to object")
            }
            var to = Object(target)
            for (let index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index]
                if (nextSource != null) {
                    for (let nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey]
                        }
                    }
                }
            }
            return to
        },
        writable: true,
        configurable: true
    })
}

var a = {
    name: "advanced",
    age: 18
}
var b = {
    name: "muyiy",
    book: {
        title: "You Don't Know JS",
        price: "45"
    }
}
var c = Object.myAssign(a, b);
console.log(c);