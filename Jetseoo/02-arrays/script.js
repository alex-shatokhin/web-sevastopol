let array = [];
let num = 0;

for (let i = 0; i <= 5; i++) {
  let temp = [];

  for (let j = 0; j <= 5; j++) {
    temp[j] = num;
    num++;
  }
  array[i] = temp;
}
console.log(array);


for (let i = 0; i <= 5; i++) {
  array[i] = [];
  for (let j = 0; j <= 5; j++) {
    num++;
    array[i][j] = num;
  }
}
console.log(array);