// const pow = function (a,b) {
//     if (b === 0) {
//         return 1;
//     }
//     return a * pow(a,b - 1);
// };

// const pow = (a, b) => a === 1 ? a : a * pow(a, b - 1);

// let func = function () {
//     return 'text';
// }
// let func = () => 'text';

// let func = function (a) {
//     return a * 100;
// }

// let func = a => a * 100;

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// const ask = (question, yes, no) => confirm(question) ? yes() : no();
//
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение."),
// );


// const user = {
//     name: 'Гена',
// };
// console.log(user.name); // гена
//
// user.name = 'Даниил';
//
// console.log(user.name); // Даниил

// const user = {
//     name: 'Гена',
// };
// console.log(user);
// delete user.name;
// console.log(user);

// let key = prompt('Введи ключ');
// let value = prompt('Введи значение');
//
// const user = {
//     [key]: value,
// };
//
// console.log(user[key]);

// const makeUser = (name, age) => (
//     {
//         name, // name: name,
//         age, // age: age,
//         "+7": name + ' ' + age,
//         "+1": 'text',
//         "+380": 'other',
//     }
// );
//
//
// let user = makeUser("John", 30);
// console.log(user);


// const user = {
//     name: 'Даниил', // 0
//     age: 30, // 1
//     city: 'Севастополь', // 2
// }
//
// for (let key in user) {
//     // ключи
//     console.log( key );  // name, age, city
//     // значения ключей
//     console.log( user[key] ); // Даниил, 30, Севастополь
// }
//
// console.log(user.name) // Даниил
