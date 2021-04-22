//spread oparator
let oldArray = [1, 2, 3,]
let newArray = [...oldArray, 4, 5];

console.log(newArray);


let oldObject = {
  name: 'olodama',
  height: '1 feet 1 inch'
}
let newObject = {
  ...oldObject,
  age: 27
}

//rest oparator


let restFunc = (...arg) => {
  return arg.filter( el => el === 1)
}

//takes unlimited numbers but returns only even numbers
let evenFunc = (...arg) => {
  return arg.filter( el => (
    el % 2 === 0
  ))
}



