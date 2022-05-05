//1
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  if (i === 100) console.log(sum);
}

//2
n = 1000;
for (let i = 0; ; i++) {
  n /= 2;
  if (n < 50) {
    const num = i;
    console.log(n, num);
    break;
  }
}

//3
while (confirm('Давай умножим на 2?)')) {
  alert(prompt('Введи число:') * 2);
}