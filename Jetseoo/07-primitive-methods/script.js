//1 Ограничение длины строки 
function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str
  } else {
    return str.slice(0, maxlength - 3) + '...'
  }
}

//2 Проверка на спам
function checkSpam(str) {
  const strToLow = str.toLowerCase()
  return strToLow.includes('xxx') || strToLow.includes('viagra')
}

//3 Первая буква - заглавная
function ucFirst(str) {
  let firstChar = str[0]
  let theRest = str.slice(1)
  return firstChar.toUpperCase() + theRest
}

//4 Случайное целое число в диапазоне
function randomInteger(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//5 Ввод числового значения
function readNumber() {
  let num
  do {
    num = prompt('Enter number')
  } while (!isFinite(num))

  if (num == null || num === '') return
  return +num
}