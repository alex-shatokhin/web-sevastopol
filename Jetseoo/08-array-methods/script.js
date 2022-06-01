// 1 
// Напишите функцию, которая преобразует строки
// вида «my-short-string» в «myShortString»

function camelize(str) {
  return str.split('-').map( word  => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }).join('')
}
// console.log(camelize('my-short-string'))


// 2 
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет в нём элементы между a и b и отдаёт массив этих элементов

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function filterRange(arr, a, b) {
  return arr.filter(item => ( item >= a && item <= b ))
}
// console.log(filterRange(arr, 2, 6));


// 3
// Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения
// кроме тех, которые находятся между a и b.
// Функция должна изменять принимаемый массив и ничего не возвращать

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1)
      i--
    }
  }
}
// console.log(filterRangeInPlace(arr, 2, 6));
// console.log(arr);

// 4
// Сортировать в порядке по убыванию

let array = [5, 2, 1, -10, 8];
function filter(arr) {
  return arr.sort( (a, b) => a - b )
}
// console.log( filter(array) );


// 5
// получить отсортированную копию, но оставить arr неизменённым

const arrStr = ["HTML", "JavaScript", "CSS"]

function copySorted(arr) {
  return [...arr.sort()]
}
// console.log(copySorted(arrStr));


// 6
// calculator

function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (str) {
    const arrStr = str.split(' ')
    let 
      a = +arrStr[0],
      op = arrStr[1],
      b = +arrStr[2];
    if (!this.methods[op] || !isFinite(a) || !isFinite(b)) {
      return
    }  else {
      return this.methods[op](a, b);
      }
    }

  this.addMethod = function(opName, func) {
    this.methods[opName] = func;
  }

  }
const calc = new Calculator();


// 7
// Трансформировать в массив имён

let vasya = { name: "Вася", surname: "Пупкин", age: 25, id: 1 };
let petya = { name: "Петя", surname: "Иванов", age: 30, id: 2 };
let masha = { name: "Маша", surname: "Петрова", age: 28, id: 3 };
let users = [ vasya, petya, masha ];

let names = users.map( user => user.name )


// 8
// Трансформировать в объекты
// Напишите код, который создаст ещё один массив объектов
// с параметрами id и fullName, где fullName – состоит из name и surname

let usersMapped = users.map( user => {
  return {
    fullName: user.name + ' ' + user.surname,
    id: user.id
  }
})
// console.log("🚀 ~ file: script.js ~ line 115 ~ usersMapped", usersMapped)


// 9
// Отсортировать пользователей по возрасту
// Напишите функцию, которая принимает массив объектов
// со свойством age и сортирует их по нему

function sortByAge(users) {
  return users.sort( (a, b) => a.age - b.age)
}

// 10
// Перемешайте массив
// Напишите функцию shuffle(array), которая перемешивает
// (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести
// к разным последовательностям элементов

let arr10 = [1, 2, 3, 4, 5, 6];
function shuffle(array) {
  return array.sort( () => Math.random() - 0.5)
}

// 11
// Получить средний возраст

function getAverageAge(arr) {
  const sum = arr.reduce( (sum, user) => {
    return sum + user.age
  }, 0)
  return sum / arr.length
}


// 12
// Оставить уникальные элементы массива
let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
  return arr.reduce( (accum, current) => {
    if ( !accum.includes(current) ) accum.push(current)
    return accum
  }, [])
}