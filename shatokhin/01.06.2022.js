// метод map

// let number = [2, 3, 4, 5, 6, 7];
//
// let number2 = number.map((num) => num * num);
//
// console.log(number, number2);

// console.log([1, -2, 15, 2, 0, 8].sort( (a, b) => a - b ));

// let arr = '192.168.0.1:8000:user:12345'.split(':');
//
// console.log(arr);
//
// Array.isArray(arr);

// const array = [1, 2, 3, 4, 5];
//
// const even = (element) => element % 2 === 0;
//
// console.log('Хотя бы 1', array.some(even));
//
// console.log('Каждый', array.every(even));

// let arr = [1, 2, 3].fill(0, 0, 3);
// console.log(arr);

// function camelize1(str) {
//     let g = str.split('-');
//     const text = 'background-color';
//     console.log(text.toUpperCase());
// }

// let camelize2 = 'background-color'
// let arr = camelize2.split('-');
// for (let camelize of arr){
//
//     alert( ${camelize} );
// }

// const camelize = (str) => {
//     return str.split('-').map(
//         (word, index) => {
//             return index === 0 ? word : word[0].toUpperCase() + word.slice(1)
//         }).join('');
// };
//
// console.log(camelize('-webkit-transition'));
