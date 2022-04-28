

let array = [];
let count = 0;

for (let i = 0; i < 9; i++) {
    array[i] = [];
    for (let j = 0; j < 9; j++) {
      
        array[i][j] = 0;
        if (j == (8-i)) {
            array[i][j] = 1;
        }
        if (j == i) {
            array[i][j] = 1;
        }
    }
}

console.log(array);