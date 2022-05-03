let array = []

for (let i = 0; i <= 8; i++) {
  array[i] = []

  for (let j = 0; j <= 8; j++) {
    array[i][j] = 0
  }

  array[i][i] = 1
  array[i][ (array[i].length - i) - 1] = 1
}
console.log(array);