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



 

     let array = [];
     let count = 0;
    for(let i = 0; i < 9; i++){

        array[i] = [];

    for(let j = 0; j < 9; j++){
        
        array [i][j] = 0;
          
         if(j ==(8-i)){
              
        array[i][j]=1;}
         
        if (i == j){
     
        array [i][j] = 1;}
    }
     // count++;
     //     array[i][j] = count;}
     }
 console.log(array);

// var arr = [1,2,3];
// arr.length = 1;
// alert(arr[1]);


// var arr = [];
// alert(arr.length);
 
//  arr[2] = 23;
//  alert(arr.length);
 
//  arr[3] = 13;
//  alert(arr.length);



