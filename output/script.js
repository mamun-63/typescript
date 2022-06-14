// const multiply = (a: number, b: number) => {
//   return a * b
// }
// console.log(multiply(7, 4))
// ___ array
let fruits = ["Orange", "Banana", "Mango"];
fruits.push("Pineapple");
console.log(fruits);
let mixed = ["Mamun", 26, true];
mixed.push("New");
// ___ object
let person = {
    name: "Mamun",
    age: 26,
    isDeveloper: true,
};
// Can't declare instead of the above scheme/ structure
// person.country = 'Bangladesh'
/**  Explicit and Union Types*/
// normal variable
let a;
a = "Mamun";
a = 26;
// array
let b = [];
b.push("Mamun", 26);
// object
let c;
c = {
    name: "Mamun",
    age: 26,
};
let obj;
obj = {
    name: "Mamun",
    age: 26,
    adult: true,
};
let d;
// it accepts, because array is also a certain type of object in js
d = [1, 2, 3, 4];
// any
let e;
let arr = [];
arr.push("Mamun", 25);
let ob;
ob = {
    name: "Mamun",
    age: 26,
    adult: true,
};
/**  How to use Functions  */
let myFunc;
myFunc = () => {
    console.log("Hello! I am function.");
};
// c?: string  - optional
let yourFunc = (a, b, c, d = "BR") => {
    console.log(`Hey ${a} ${b} ${c} ${d}`);
    // ts returns void default
    // js - returns undefined
    // void means nothing; undefined is value, but nothing defined
    return a + b;
};
yourFunc("Mamun", "Abdullah");
let numb = (a, b) => {
    return a + b;
};
console.log(numb(2, 4));
const userDetails = (id, user) => {
    console.log(`User name is ${user.name}, id: ${id}, age: ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 30 ? "Sir" : "Mr."} ${user.name}`);
};
/** Functions signature */
let calculations;
calculations = (a, b, c) => {
    if (c === "add")
        return a + b;
    else
        return a - b;
};
console.log(calculations(5, 16, "add"));
/** Class  */
// class Player {
//   // private name: string; // Access Modifier
//   // age: number;
//   // readonly country: string;
//   // constructor(n: string, a: number, c: string) {
//   //   this.name = n;
//   //   this.age = a;
//   //   this.country = c;
//   // }
//   // if define access modifier then, can minimize
//   constructor(
//     private name: string,
//     public age: number,
//     readonly country: string
//     ) {}
//   play () {
//     console.log(`${this.name} from ${this.country} is playing!`)
//   }
// }
import { Player } from "./classes/Player.js";
const mamun = new Player("Abdullah Al Mamun", 25, "Bangladesh");
const nuhas = new Player("Anjum Nuhas", 27, "Bangladesh");
// mamun.name = 'Rothi'
mamun.age = 24;
// mamun.country = 'Pakistan';
// console.log(mamun.name)
console.log(mamun.age);
// private mode: no modification and access
// readonly: can access but cant modify
const players = [];
players.push(mamun);
players.push(nuhas);
console.log(players);
const drawRectangle = (options) => {
    let width = options.width;
    let length = options.length;
};
drawRectangle({
    width: 30,
    length: 20,
    // height: 28 // Can't put this
});
let threeDptions = {
    width: 30,
    length: 20,
    height: 15,
};
drawRectangle(threeDptions);
const response1 = {
    status: 200,
    type: "good",
    data: {
        name: "test",
        something: 300,
    },
};
