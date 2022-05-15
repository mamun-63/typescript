// const multiply = (a: number, b: number) => {
//   return a * b
// }

// console.log(multiply(7, 4))


// ___ array 
let fruits = ['Orange', 'Banana', 'Mango']
fruits.push('Pineapple')
console.log(fruits)

let mixed = ['Mamun', 26, true]
mixed.push('New')

// ___ object
let person = {
  name: 'Mamun',
  age: 26,
  isDeveloper: true
}
// Can't declare instead of the above scheme/ structure
// person.country = 'Bangladesh'


/**  Explicit and Union Types*/

// normal variable
let a: number | string;
a = 'Mamun'
a = 26

// array
let b: (number | string)[] = [];
b.push('Mamun', 26)

// object
let c: object;
c = {
  name: 'Mamun',
  age: 26
}

let obj: {
  name: string,
  age: number,
  adult: boolean
}
obj = {
  name: 'Mamun',
  age: 26,
  adult: true
}

let d: object;
// it accepts, because array is also a certain type of object in js
d = [1,2,3,4]