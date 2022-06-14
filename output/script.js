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
/** Generics */
// Reusable block of code
// const addID = (obj: Object) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// let user = addID({
//   name: "mamun",
//   age: 26,
//   country: "Bangladesh",
// });
// user. // not getting name or age
// ______________
// const addID = <T>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// let user = addID({
//   name: "mamun",
//   age: 26,
//   country: "Bangladesh",
// });
// // user.age
// // getting the type that is sending in addID
// // The problem is can send the string type too.
// let usr = "Mamun";
// addID(usr); // it is accepting string too.
// ______________
// const addID = <T extends object>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// let user = addID({
//   name: "mamun",
//   age: 26,
//   country: "Bangladesh",
// });
// // user.age
// // getting the type that is sending in addID
// // The problem is can send the string type too.
// let usr = "Mamun";
// addID(usr); // cant send string now
// ______________
// const addID = <
//   T extends {
//     name: string;
//     age: number;
//   }
// >(
//   obj: T
// ) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// let user = addID({
//   name: "mamun",
//   age: 26,
//   country: "Bangladesh",
// });
// ________ generic for interface
// interface APIResponse {
//   status: number;
//   type: string;
//   data: object;
// }
// const response1: APIResponse = {
//   status: 200,
//   type: "good",
//   data: {
//     name: "test",
//     something: 300,
//   },
//   // but if we dont know what type of data is coming
// };
// but if we dont know what type of data is coming
// interface APIResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }
// const response1: APIResponse<object> = {
//   status: 200,
//   type: "good",
//   data: {
//     name: "test",
//     something: 300,
//   },
// };
/** Enum Type */
var ResType;
(function (ResType) {
    ResType[ResType["SUCCESS"] = 0] = "SUCCESS";
    ResType[ResType["FAILURE"] = 1] = "FAILURE";
    ResType[ResType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResType[ResType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResType || (ResType = {}));
const response1 = {
    status: 200,
    type: ResType.FAILURE,
    data: "test data",
};
console.log(response1);
/** tupes: not used more; but convenient for csv file read  */
// like array, but order is important for type
let ar = [3, "hello", { p: 3 }];
ar[1] = 120;
// ar[0] = false; // can assign different type
let br = [4, "world", { t: 4 }];
// br[1] = 4;
// br.push() // push is not applicable as type is not defined
