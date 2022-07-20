// const without = function(obj, key_del) {
//     let obj_temp = {};
//     for (let key in obj) {
//       if (key === key_del) continue;
//       obj_temp[key] = obj[key];
//     }
//     return obj_temp;
//   };
//   const obj3 = without(obj, 'key_del');

//   alert(obj3.key_del);
//   alert(obj3.name);





/*Задача 1
let camelize = "background-color";
let arr = camelize.split("-");
for (let camelize of arr) {
  alert(`${camelize}`);
}*/

/*Задача 2*/




  /*function filterRange1(array, d1, d2){
    let tempArray = array.sort();
    if (tempArray[0] <= d1){
      for(let i in tempArray){
       if (tempArray[i] > d2){
		  return tempArray.slice(0, i);
		  }
      }
    }
    else return -1;
  }*/
 
 
 
  /*let arr = [5, 3, 8, 1];
function filterRange2(arr, d1, d2) {
  return arr.filter(item => (d1 <= item && item <= d2));
}

  let abaz = filterRange2(arr, 1, 3);

  alert( abaz);  
  alert( arr ); 
*/


/*Задача 3*/

/*let arr = [5, 3, 8, 1];
  function filterRangeInPlace(arr, d1, d2){
	for (let i in arr){
	if(arr[i] < d1 || arr[i] > d2)
		arr.splice(i,1);
		}
  }

filterRangeInPlace(arr, 1, 1); 

alert( arr ); 


/*Задача 4*/

/*let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);
alert( arr );*/

/*arr.sort((x, y) => x - y);*/





/*Задача 5*/

/*function copySorted(arr) {
  return arr.slice(0,3).sort();
  /*arr.sort(function(a, b) { return a - b; });
}

let arr = ["HTML", "JavaScript", "CSS"];

let abaz = copySorted(arr);

alert( abaz );
alert( arr );




/*Задача 6*/

/*let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
let calc = new Calculator;

alert( calc.calculate("3 + 7") );

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

/*Задача 7*/

/*let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya,masha,petya, ];

let names = users.map(item => item.name);

alert( names ); 


/*Задача 8*/

/*let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersabaz = users.map(item => ({
fullName: `${item.name} ${item.surname} ${item.id}`,
/*id: item.id*/
/*}));



alert( usersabaz[0].id ) // 1
alert( usersabaz[0].fullName ) // Вася Пупкин


/*Задание 9 */

function sortByAge(arr){
arr.sort(function(a, b) {
if (a.age > b.age) return 1;
else return -1; 
});



let abaz = arr.map(item => ({
  fullName: `${item.name} ${item.age}`
  /*id: item.id*/
  }));
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

alert(arr[0].fullName); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name);


/*Задания 10*/

/*let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];
shuffle(arr);
alert(arr);

*/

