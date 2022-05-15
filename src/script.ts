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

// any
let e: any;
let arr: any[] = []
arr.push('Mamun', 25)
let ob: any;
ob = {
  name: 'Mamun',
  age: 26,
  adult: true
}

/**  How to use Functions  */
let myFunc: Function;
myFunc = () => {
  console.log('Hello! I am function.')
}

// c?: string  - optional
let yourFunc = (a: string, b: string, c?: string, d: string = 'BR') => {
  console.log(`Hey ${a} ${b} ${c} ${d}`)

  // ts returns void default
  // js - returns undefined
  // void means nothing; undefined is value, but nothing defined
  return a + b;
}
yourFunc('Mamun', 'Abdullah')

let numb = (a: number, b: number): number => {
  return a + b;
}
console.log(numb(2,4))