// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
//
// let new_array = arr.splice(0, 2, "Давай", "танцевать");
//
// alert( arr );
// alert( new_array );

// let arr = [1, 2, 5];
//
// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr.splice(-1, 0, 3, 4);
//
// alert( arr ); // 1,2,3,4,5


// let arr = ["t", "e", "s", "t"];
//
// alert( arr.slice(1, 3) ); // e,s (копирует с 1 до 3)
//
// alert( arr.slice(-2) ); // s,t (копирует с -2 до конца)
//
// let arr_copy = arr.slice();

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// arr.forEach(function(item) {
//     console.log(item.toUpperCase());
// });

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i, arr);
// }


// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);

// let arr = ["Bilbo", "Gandalf", "Nazgul"];
//
// let result = arr.indexOf('Bilbo', 3);
//
// console.log(result);

// let arr = ["Bilbo", "Gandalf", "Nazgul"];
//
// let result = arr.includes('Bilbo', 0);
//
// console.log(result);

// let arr = [
//     {
//         name: 'alex'
//     },
//     {
//         name: 'Даниил'
//     },
//     {
//         name: 'Гена'
//     },
//     {
//         name: 'Никита'
//     },
// ];
//
//
// let result = arr.find((item) => {
//     // если true - возвращается текущий элемент и перебор прерывается
//     // если все итерации оказались ложными, возвращается undefined
//     return item.name === 'Вадим';
// });
//
// console.log(result);



// https://blog.ru/posts/ список всех записей
// https://blog.ru/post/1 адрес конкретной записи в блоге

let post_id = 1;

let dataBase = [
    {
        id: 1,
        title: 'Блог запись 1',
    },
    {
        id: 2,
        title: 'Блог запись 2',
    },
    {
        id: 3,
        title: 'Блог запись 3',
    },
];


let result = dataBase.find((post) => {
    return post.id === post_id;
});

console.log(result.title);
