// let object = {
//     name: 'test',
//     age: 20,
//     city: 'city',
// };
//
// let keys = Object.keys(object);
// let values = Object.values(object);
// let entries = Object.entries(object);
//
// console.log(keys, values, entries);

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// };
//
// let doublePrices = Object.fromEntries(
//     // преобразовать в массив, затем map, затем fromEntries обратно объект
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// );
//
// console.log(doublePrices);

// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//     // // title, items – взято из options,
//     // // width, height – используются значения по умолчанию
//     // alert( `${title} ${width} ${height}` ); // My Menu 200 100
//     // alert( items ); // Item1, Item2
// }
//
// showMenu({title: "My menu", items: ["Item1", "Item2"]});


// function test(...args) {
//     let sum = 0;
//     for (let arg of args){
//         sum += arg;
//     }
//     return sum;
// }

// function showName(firstName, lastName, ...titles) {
//     alert( firstName + ' ' + lastName ); // Юлий Цезарь
//
//     // Оставшиеся параметры пойдут в массив
//     // titles = ["Консул", "Император"]
//     alert( titles[0] ); // Консул
//     alert( titles[1] ); // Император
//     alert( titles.length ); // 2
// }
//
// showName("Юлий", "Цезарь", "Консул", "Император");


// let arr = [3, 5, 1];
//
// Math.max(...arr);
// Math.max(3, 5, 1);
//
//
// function test() {
//     console.log(arguments);
// }
//
// test(...arr);

// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];
//
// let merged = [...arr, ...arr2];
//
// Math.max(...merged);

// let str = 'hello';
//
// function toUpper(str) {
//     let [firstL, ...rest] = str;
//     return firstL.toUpperCase() + rest.join('');
// }


// function alertWithDelay(...all) {
//     setTimeout(() => alert(all.join(' ')), 3000);
// }
//
// alertWithDelay('Привет', 10, 'test', 'тест2');
