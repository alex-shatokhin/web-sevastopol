// let name = "Daniil";
// let age = 25;
// let city = "Savastopol";
// console.log("Имя:", name);
// console.log("Возраст:", age);
// console.log("Город:", city);

// name = "Denis";
// age = 15;
// city = "Moscow";
// console.log("\n");
// console.log("Имя:", name);
// console.log("Возраст:", age);
// console.log("Город:", city);

// let x = 87;
// x = x / 2 * 4;
// alert("test" + "test111");

// let name = 10;
// alert(`privet ${name +10}`);

// let answer = 45 < 12;
// alert(answer);
// true = да
// false = нет
// сравнивать числа
// > 10>5
// < 5 < 2
// === 5 === 5
// != 5 != 6
// >=
// == сравнение 
// !, меняет значение на противоложный
//&& логические и
// ||, логический или
// alert((5 > 4) && (10 < 11));
// alert((5 > 6) || (10 < 11));
// alert(!(5 > 4));

// let name;
// alert(name);

// let variable = "test";

// let user = {
//     name: variable,
//     age: 25,
//     city: "Sevastopol",
//     other: {
//         second: "name",
//     },

// };

// let array = ["Sasha", 25, "Sevastopol", user];
// console.log(array);

// let x = function () {};
// console.log(typeof x);

//18.04.2020

// let result = prompt(`Введите город`, `Севастополь`);
// let q = confirm(`Ты из какого города ${result}?`)
// alert(`Привет ${result}`);
// console.log(result, q);

// let result = 15;
// result (*+-) = 10;

// let result = 15;
// result -= 10;

// let x = 0;
// x += 1;
// x++;
// x--;

// let x = 0;
// x++;
// console.log(x)


// let name = prompt(`ты из какого города`);
// if (name === `Донецк`){
//     alert(`Правда`);

// } else {
//     alert(`Неправда`);
// }


// let result =prompt(`Сколько ты зарабатваешь`);
// let x = 100000;
// let q = confirm(`Ты зарабатываешь больше ${x}?`);

// if (result > x) {
//     if(q) {
//         alert(`Красавчик`);
//     }else{
//         alert(`Не красавчик`);
//     }
// }else{
//     alert("не красавчик")
// }

// 21.04.2022

// let x = 1;
// while (x <= 10) {
//     alert(x);
//     x ++;
// }
// alert("конец");

// let x = 1;
// do {
//     alert(x);
//     x ++;
// }
// while(x <=5);
// alert("конец");

// for (let i = 0; i <= 3; i++) {
//     alert(i);
// }

// for (let i = 0; i <= 300; i++) {
// if (i === 5) {
//     break;
// }
// alert(i);
//     }

// for (let i = 0; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     alert(i);
//         }

// let y = Math.floor(Math.random() * 100);
// let save_x = "";
// for (let i = 0; i < 10; i++){
//     let value = prompt(`Угадайте число от 0 до 100`);
//     save_x += ` ${value}`;
//     if (i !== 0) {
//     alert(`вы пробовали: ${save_x}`);
//     }
//     if (Number(value) === y) {
//         alert("угадал");
//         break;
//     }
//     if (value > y) {  
//         alert("бери меньше")
        
//     } else {
//         alert("бери больше")
//     }

//     if (i === 9) {
//         alert("ВСЁ");
//     }

// }

// home-work

//    let result = 0;
//    for(let i = 1; i <= 100; i++){
//        result = result + i;
//    }
//    alert(result);


// let num = 1;
// for (let n = 1000; n >= 50;) {
//     n /= 2;
//     num++;
//         alert(n);
//         alert(num);
//     }


// let n = 1000;
// let num = 0;
// while(n >= 50){
//     n = n / 2;
//     num++;
// }
//     alert(`Счет n = ${n}, num = ${num}`);


// let x = prompt("Введите значение умноженное на 2");
// x *= 2; 

// alert(`умноженное значение ${x}`);

// while(1){
//     let k = prompt("если готов да, не готов нет")
//     if (k == "да"){
//         x *= 2; 
    
//     alert(`умноженное значение ${x}`);
// }
//     if(k == "нет") break;
// }