const myObj1 = {
  name: 'Nikita',
  sex: true,
  age: 'forever young',
  capital: '$1.000.000'
}

const myObj2 = {
  name: 'Nikita',
  sex: true,
  age: 'forever young',
  capital: '$1.000.000'
}

const myObj3 = {
  name: 'Dafaq',
  sex: true,
  age: '100500',
  capital: '$1.000.000'
}

//1 Написать функцию, которая принимает
//объект и возвращает его копию

function copyObject1(obj) {
  return newObj = Object.assign({}, obj)
}

function copyObject2(obj) {
  return newObj = {...obj}
}


//2 Напишите функцию, которая возвращает
//новый объект без указанных значений

function newObjWithout(obj) {
  const newObj = {...obj}
  for (let i = 1; i <= arguments.length; i++) {
    delete newObj[arguments[i]]
  }
  return newObj
}

//3 Напишите функцию, которая поверхностно
//сравнивает два объекта

function isEqual(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1)
  const props2 = Object.getOwnPropertyNames(obj2)

  if (props1.length !== props2.length) {
    return false
  }
   for (let i = 0; i < props1.length; i++) {
     const prop = props1[i]
     if (obj1[prop] !== obj2[prop]) {
       return false
     }
   }
   return true
}

//4 Напишите функцию, которая поверхностно
//находит пересечения объектов и возвращает
//объект пересечений

function intersection(obj1, obj2) {
  const props1 = Object.getOwnPropertyNames(obj1)
  const props2 = Object.getOwnPropertyNames(obj2)
  let resultObj = {}

  for (let i = 0; i < props1.length; i++) {
    const prop = props1[i]

    if (obj1[prop] == obj2[prop]) {
      resultObj[prop] = obj1[prop]
    }
  }
  return resultObj
}
