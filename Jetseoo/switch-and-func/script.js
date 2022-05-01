// 1 - calculator

function calc(a, b, action) {
  switch (action) {
    case '+':
      return a + b
      break
  
    case '-':
      return a - b
      break

    case '*':
      return a * b
      break

    case '/':
      return a / b
      break

    default:
      break
  }
}

let firstNum
do {
  if (firstNum !== undefined) {
    if (!confirm(`First number is ${firstNum}, continue with this number?`)) {
      firstNum = +prompt('Enter first number', '10')
    }
  } else {
    firstNum = +prompt('Enter first number', '10')
  }
  let action = prompt('What do you want to do? (+, -, *, /)', '+')
  let secondNum = +prompt('Enter second number', '10')
  
let result = calc(firstNum, secondNum, action)
  alert(result)
  firstNum = result

} while (confirm('Do you want to continue?'))

// 2 - sort

const randomNumbers = [4, 7, 2, 1, 11, 5, 3, 10, 8, 6, 9, 12]

function sort(arr) {
  return arr.sort(function (a, b) {return a - b})
}
sort(randomNumbers)

// 3 - second_greatest_loweest

function findSecondGreatestLowest(arr) {
  const sorted = [...arr].sort( (a, b) => a - b );
  return [sorted[1], sorted[sorted.length - 2]]
}
console.log(findSecondGreatestLowest(randomNumbers));
