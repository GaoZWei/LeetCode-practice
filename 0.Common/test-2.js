//11.集合转数组
var set = new Set()
set.add(1)
set.add(2)
set.add(3)
console.log(set);
var arr = [].slice.apply(set) //不行
var arr1 = [...set] //可以
var arr2 = [].map.call(set, o => o) //不行
console.log(arr, arr1, arr2);

//12
console.log({} === {}); //false 
console.log(Symbol('a') === Symbol('a')); //false 
console.log(Symbol.for('a') === Symbol.for('a')); //true   返回根据给定key的找到的symbol