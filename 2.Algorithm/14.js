// 宏任务与微任务
function foo() {
    console.log('2');
    setTimeout(() => {
        console.log('3');
        // Promise.resolve('4-1').then('4-2').then(Promise.resolve('4-3')).then((res) => {
        Promise.resolve('4-1').then('4-2').then(Promise.resolve('4-3')).then((res) => {
            console.log(res);
        }).then((res) => {
            console.log(res);
        })
        Promise.resolve('4-5').then((res) => {
            console.log(res);
        })
        setTimeout(() => {
            console.log('9');
        }, 0);
    }, 0);
    new Promise((resolve, reject) => {
        console.log('5');
        setTimeout(() => {
            console.log('6');
            resolve('7');
        }, 0)
    }).then((res) => {
        console.log('8');
        setTimeout(() => {
            console.log(res);
        }, 0)
    });
    Promise.reject('10').then(() => {
        throw '11';
    }).catch((res) => {
        console.log(res);
    })
    return 'end';
}

function main() {
    console.log('start');
    console.log(foo());
}
main();

