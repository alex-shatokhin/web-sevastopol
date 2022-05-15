// let user = {
//     name: "Иван",
//     age: 30,
// };
//
// let clone = {}; // новый пустой объект
//
// // скопируем все свойства user в него
// for (let key in user) {
//     clone[key] = user[key];
// }


// let user = { name: "Иван" };
//
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
//
// // копируем все свойства из permissions1 и permissions2 в user
// Object.assign(user, permissions1, permissions2);

// let obj1 = {
//     name: '',
//     age: '',
// }
//
// let obj2 = {};
//
// Object.assign(obj2, obj1);

// let obj1 = {
//     name: '',
//     age: '',
// }
//
// let obj2 = Object.assign({}, obj1);


// let user = {
//     name: "Иван",
//     sizes: {
//         height: 182,
//         width: 50
//     },
// };
//
// let clone = Object.assign({}, user);
//
// user.name = 'Саша';
// clone.name === user.name // false


// let user = {
//     name: "Джон",
//     age: 30,
//     funcHi3: () => alert('hi3'), // Метод объекта
//     sayHi() { // то же самое, что и "sayHi: function()"
//         alert("Привет");
//     },
// };
//
// user.funcHi3();
//
// user.funcHi = () => alert('hi1');
// user.funcHi();
//
// let func = () => alert('hi2'); // функция
// user.funcHi2 = func;
// user.funcHi2();


// let user = {
//     name: "Джон",
//     age: 30,
//     sayHi: () => {
//         // this - это "текущий объект"
//         alert(this.name);
//     }
// };
//
// let clone = Object.assign({}, user);
//
// user.sayHi(); // Джон
// clone.name = 'Даниил';
// clone.sayHi();

// let user = {
//     firstName: "Илья",
//     sayHi() {
//         let arrow = () => alert(this.firstName);
//         arrow();
//     }
// };
//
// user.sayHi(); // Илья


// const user = {
//     name: '',
//     city: '',
//     getName: function () {
//         return this.name;
//     }
// }

// let obj = {};
// let obj = new Object();

// функция конструктор
// function User(name, isAdmin) {
//     this.name = name;
//     this.isAdmin = isAdmin;
// }
//
// let user = new User("Вася", false);
//
// // user = {
// //     name: "Вася",
// //     isAdmin: false,
// // }
// alert(user.name); // Вася
// alert(user.isAdmin); // false


// function User(name, isAdmin) {
//     this.name = name;
//     this.isAdmin = isAdmin;
//
//     this.getName = function () {
//         alert(this.name);
//     }
//
//     this.setName = function (name) {
//         this.name = name;
//     }
// }
//
// let user = new User();
// user.getName();
// user.setName('Петя');
// user.getName();

// function Product(name, weight, price, count){
//     this.name = name;
//     this.weight = weight;
//     this.price = price;
//     this.count = count;
//
//     this.getProp = function (prop) {
//         if (this[prop]) {
//             console.log(this[prop]);
//         }
//     }
//
//     this.setProp = function (prop, value) {
//         if (this[prop]) {
//             this[prop] = value;
//         }
//     }
// }
//
// let product = new Product('Мясо', 150, 300, 10);
//
// product.getProp('name');
// product.setProp('weight', 145);
// product.getProp('weight');

