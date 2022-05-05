// let result = prompt('выбири действия','Займемся');
// let q = confirm(`сексом ${result}?`);
// alert(`конечно ${result}`);
// console.log(result,q);

// let result = 20;
// result -=10;
// console.log(result);

// let x = 0;
// x += 1;
// x--;
// x++;
// console.log(x);

// let name = prompt('Твой бумер');
// if (name ==='конечно')
// {alert('правда');}
// else { alert('неправда');}

// let result = prompt('Какой у тебя размер?');
// let x = 30;
// let q = confirm(`Он больше ${x}?`);
// if (result < x) {
//     if (q){
//         alert ('Брехня');
//     } else {
//         alert ('Правда');
//     }
// }else {
//     if (q) {
//         alert ('Брехня');
//     } else {
//         alert ('Правда');
//     }
// let x = 1;

// while (x<=10){

//     alert(x);

//     x++;
// }
// alert('конец');

// let x = 1;

// do {

//     alert(x);
//     while(false);

//     x++;
// }
// while(false);

// alert(x);

// for (let i = 0; i < 100; i++){

// if (i === 5) {

// break;

// }

//     alert(i);

// }

//  for (let i = 0; i <= 5; i++){

//  if (i === 3) {

//  continue;

//  }

//      alert(i);

//  }

/*
 let y = Math.floor(Math.random() * 100);
  let h = 'Не угaдал';
 for(let i = 0; i < 10; i++){
    if (i >=1){
        alert(h);
    }
     let x = prompt('Угадай число от 0 до 100');
      h += ` ${x}`;
     
     
     if (Number(x) === y) {       
         alert('Угадал');
         break;
     }

     if (y < x) {
         alert('бери меньше');    
     } else {
         alert('бери больше');
     }
    
     if (i === 9) {
         alert('Попытки закончились');
     }
 }
 задание 1
let y = 0;
for(let i = 0; i <= 100; i++) {
 y = y + i;
}
 alert(y);

//заданиеи 2

 let n = 1000;
  let num = 0;
 while(n >= 50 ){
     n = n/2;
     num++;
 }
 alert(`Число n = ${n}, num = ${num}`);


// Задания 3
/*
    let x = prompt('Введите значение которое нужно умножить');
    x *= 2;
    alert(`Умноженое значение ${x}` );
    while(true){
    let k = prompt('Дальше умножать? (Да/Нет)')
    if (k != 'Да') break;
    x *= 2;
    alert(`Умноженое значение ${x}` );
    
    }
//}
*/
// let x = prompt('Введите значение которое нужно умножить');
// x *= 2;
// alert(`Умноженое значение ${x}` );
// while(1){
//     let k = prompt('Дальше умножать? (Да/Нет)')
//     if(k == 'Да'){
//         x *=2;
//         alert(`Умноженое значение ${x}` );
//     }
//     if(k == 'Нет')break;

// }

// let y = 0;
// for(let i = 0; i <= 100; i++) {
//  y = y + i;
// }
//  alert(y);

//  let n = 1000;
//  let num = 0;
// while(n >= 50 ){
//     n = n/2;
//     num++;
// }
// alert(`Число n = ${n}, num = ${num}`);
// let i=0;
// while(i<10){
//     alert('1');
// i++;

// }

// for(let i=0;i<10;i++){
// alert('1');
// }

// массивы и циклы

// let array = [ [0,1,2,3,4,],
// [5,6,7,8,9,],
// [10,11,12,13,14,],
// [15,16,17,18,19,],
// [20,21,22,23,24,],
// ];

// for(let i; i < array.length; i++){
// let temp = array[i]

// for(let j = 0; j < temp.length; j++){

//     console.log(temp[j]);
// }
// }

// let array = [];
// let count = 0;

// for(let i = 0; i < 5; i++){
//     array[i] = [];
//     for(let j = 0; j < 5; j++){

//     count++;
//         array[i][j] = count;
//     }
//     }
// console.log(array);

//      let array = [];
//      let count = 0;
//     for(let i = 0; i < 9; i++){

//         array[i] = [];

//     for(let j = 0; j < 9; j++){

//         array [i][j] = 0;

//          if(j ==(8-i)){

//         array[i][j]=1;}

//         if (i == j){

//         array [i][j] = 1;}
//     }
//      // count++;
//      //     array[i][j] = count;}
//      }
//  console.log(array);

// var arr = [1,2,3];
// arr.length = 1;
// alert(arr[1]);

// var arr = [];
// alert(arr.length);

//  arr[2] = 23;
//  alert(arr.length);

//  arr[3] = 13;
//  alert(arr.length);
//  КОНСТРУКЦИЯ SWITCH

// let berry = prompt('яблоко,арбуз,клубника,вишня');

// switch(berry){

//     case 'арбуз':
//         alert('Ягода')
//         break;

//     case 'клубника':
//         alert('Ягода')
//         break;

//     case 'вишня':
//         alert('Ягода')
//         break;

//     case 'яблоко':
//         alert('не ягода')
//         break;

// }

// функция
//   function getRandomNumber(x){
//       return Math.floor(Math.random() * x);
//   }
//   let array = [];

//  for(let i = 0; i < 9; i++ ){

//      array[i] = [];

//      for(let j = 0; j < 9; j++){
//          // array [i][j] = 0;

//           array[i][j] = getRandomNumber(10);

//      }

//      }

//  console.log(array);

// function getRandomNumber(x = 10){
//       return Math.floor(Math.random() * x);
// }

// console.log (getRandomNumber(100));

// function min(a,b) {

//     // return Math.floor(Math.random() * x);

//     if (a < b) {
//         return a;
//     }else{
//         return b;
//     }
// }

// console.log(min(100 * 2,150 ));

/*
 var op; 

  // функция расчёта
  function func() {
  	// переменная для результата
     var result;
     // получаем первое и второе число
     var num1 = Number(document.getElementById("num1").value);
     var num2 = Number(document.getElementById("num2").value);
     // смотрим, что было в переменной с действием, и действуем исходя из этого
     switch (op) {
       case '+':
         result = num1 + num2;
         break;
       case '-':
       result = num1 - num2;
         break;
      case '*':
        result = num1 * num2;
        break;
       case '/':
        result = num1 / num2;
        break;
    }
  }

  */
//  Задания № 1

// let numb1 = prompt("Введите первое число");

// let znak = prompt("Действие: /,-,*,+");

// let numb2 = prompt("Введите второе число");

// alert(calc(numb1, znak, numb2));
// let numb3 = calc(numb1, znak, numb2);

// while (1) {
//   if (confirm("Продолжаем работу с числом? (Да/Нет)")) {
//     let znak = prompt("Выбери действие: /,-,*,+");
//     let numb2 = prompt("Введите второе число");
//     alert(calc(numb3, znak, numb2));
//     numb3 = calc(numb3, znak, numb2);
//   } else {
//     alert("Слабак");
//     break;
//   }

//   if (numb3 === 100) {
//     alert("Ты попал в ловушку ХА ХА ХА!!!");
//     // let i = 0;
//     // //       do{
//     // //           let a = prompt('Сколько ног и рук у осминога? Ответ:?');
//     // //             i++;
//     // //             alert(a);
//     // //       }while(a === 8);
//   }
//   //       {        // alert('Пока');break;
//   else alert("ТЫ НА ВСЕГДА ОСТАНЕШЬСЯ ЗДЕСЬ!!!");
//   //       }
// }
// //       // if (numb3 === (100 - k)){

// //      // let k = (20);

// //      // alert("Ты все ближе к сокровищам !!!");

// // //     // }
// function calc(x, y, z) {
//   let result = 0;
//   switch (y) {
//     case "+":
//       result = Number(x) + Number(z);
//       break;
//     case "-":
//       result = x - z;
//       break;
//     case "*":
//       result = x * z;
//       break;
//     case "/":
//       result = x / z;
//       break;
//   }
//   return result;
// }

// //  сортировка массивов по возраст Задания 2

// let arr = [5, 2, 1, 18, -10, 8, -1, 123];

// arr.sort((a, b) => a - b);

// alert(arr);

// //  Задания 2

// let a = [8, -1, 35, -23, 7, 10, 0];
// // let b = [1, 2, 3, 4, 7, 10, 110];

// function swap(ar, x, y) {
//   let j = ar[y];
//   ar[y] = ar[x];
//   ar[x] = j;
// }

// function sort(k) {
//   let n = 1;
//   while (n) {
//     for (let j = 1; j < k.length; j++) {
//       if (k[j - 1] > k[j]) {
//         swap(k, j, j - 1);
//         n++;
//       }
//     }
//     if (n > 1) { n = 1;
//     } else { n = 0;
//     }
//   }
// }

// alert(a);
// sort(a);
// alert(a);

// alert(a);
// swap(a,0,1);
// alert(a);
/*
for(let a = 0; a = a - b) {



}


*/


const pow = function (a,b) {
    // if(b<0) //если степень <1
    //     return 1/a * pow(a,b+1);

    if (b==0)
         return 1; 

   // if(b>0) //если степень >1
     return a * pow(a,b - 1);
  }

  console.log(pow(4,2)); 
  
