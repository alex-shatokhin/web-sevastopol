

// alert( userName ); // 

// showMessage();

// alert( userName );

// function sum(a, b) {
//     return a + b;
//   }
//   let result = sum(1, 2);
//   alert( result ); // 3

// function getName() {
//     var name = document.getElementById("input_name").value;
//   }
  
//   function getAge() {
//     var age = document.getElementById("input_age").value;
//   }
//   console.log (getName)
//   console.log (getAge)

// let user = {
//     name: "Вася"
//   };
  
//   let id = Symbol("id");
  
//   user[id] = 1;
  
//   alert( user[id] );


// let str = 'Hi';

// str = 'h' + str[0]; // заменяем строку

// alert( str ); // hi

//home 

// let truncate = ("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…";

// let truncate = ("Всем привет!", 20) = "Всем привет!";

// function truncate(str, maxlength) {
//     return(str.length > maxlength)?
//     str.slice(0, maxlength - 1) + "..." : str;
// }
// alert(truncate)



// function ucFirst(str) {
//     if (!str) return str;
  
//     return str[0].toUpperCase() + str.slice(1);
//   }
  
//   alert( ucFirst("в") );




// function CheckSpam(str){
//     let LowerStr = str.toLowerCase();

// }




// const truncate = function (str, maxlength) {
//     let str_new = "";
//     if (str.length > maxlength) {
//       for (let i = 0; i < maxlength - 3; i++) {
//         str_new += str[i];
//       }
//       for (let i = 0; i < 3; i++) str_new = str_new + ".";
//       return str_new;
//     }
//     return str;
//   };
//   let str = "123456789";
//   alert(truncate(str, 2));



// const ucfirst = function (str) {
//     let str_c = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++) str_c += str[i];
//     return str_c;
//   };
//   alert(ucfirst("qwerty"));


// const readNumber = function () {
//     let number = prompt("Введите число:  ");
//     return number;
//   };
//   alert(readNumber());

/* Задание 2 спам лист */
// let spamlist = ["Viagra", "XXX"];
// const checkSpam = function (str) {
//   let str_lower = str.toLowerCase();
//   //alert(str.toLowerCase());
//   for (let i in spamlist) {
//     if (str_lower.includes(spamlist[i].toLowerCase())) return true;
//     //if(str.indexOf(spamlist[i]) str.toLowerCase());
//   }
//   return false;
// };
//alert(checkSpam("By ViaGRa now"));
