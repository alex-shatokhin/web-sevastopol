// const sayHi = function() {
//     alert( "Привет" );
// };
//
// const sayHi2 = sayHi;
//
// console.log(sayHi === sayHi2);
// let x, b;
// let test;
//
// while (1) {
//     if (x > b) {
//         test = function() {
//             console.log(a);
//         }
//     } else {
//         test = function() {
//             console.log(b);
//         }
//     }
// }
//
// test();



// function test(a, b, c, d) {
//     c(a);
//     d();
// }
// const func = function (text) {
//     alert(text);
// }
//
// test(10, 'test', func, function() {
//     alert('test');
// })


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
//
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

// const func = function (question, result) {
//     if (confirm(question)) {
//         return result;
//     }
// }
//
// const func2 = func('test', function () {
//     alert('text');
// });

// let a, b;
// let x
//
// if (a > b) {
//     x = true;
// } else {
//     x = false;
// }
//
// let x = a > b ? 'da' : 'net';
// <условие> ? <значение> : <иначе>

// const test = function (number) {
//     if (number > 0) {
//         return number + test(number - 1);
//     }
//
//     return number;
// }
//
// console.log(test(1000));


// ДЗ

// pow(<число>, <степень>);
// console.log(pow(2, 2)); // 4
