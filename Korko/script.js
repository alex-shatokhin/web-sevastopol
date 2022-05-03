


let nu1 = prompt("Введи первое число");
let nu2 = prompt("Выберете действие: /, +, *, -");
let nu3 = prompt("Введи второе число");

alert (calc(nu1,nu2,nu3));

let s = calc(nu1,nu2,nu3);
while(1){if(confirm("продолжаем работу с числом? да/нет"));
let nu2 = prompt("Выберете действие: /, +, *, -");
let nu3 = prompt("Введи второе число");
alert(calc(s,nu2,nu3));
s = calc(s,nu2,nu3);

}








function calc (x,y,b){
let s = 0;
switch(y) {
    case'-':
     s = x - b;
    break;
    case'+':
     s = Number(x) + Number(b);
    break;   
    case'*':
     s = x * b;
    break;
    case'/':
     s = x / b;
    break;
   }
  
   return (s);
   
}

