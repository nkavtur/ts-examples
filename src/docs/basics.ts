// // example function
// function addFn(n1: number, n2: number, printResult: boolean) {
//   const result = n1 + n2;
//   if (printResult) {
//     console.log('Result is ' + result);
//   }
//   return n1 + n2;
// }
//
// const number1 = '5';
// const number2 = 2.8;
//
// const result = addFn(+number1, +number2, true)
// console.log(result);
//
// // object types
// const person1 = {
//   name: 'Nikolai',
//   age: 28
// }
// person1.name
//
// // any object type
// const person2: object = {
//   name: 'Nikolai',
//   age: 28
// }
// // person2.name
//
// // this is implicitly done for person1
// const person3: {
//   name: string,
//   age: number
// } = {
//   name: 'Nikolai',
//   age: 28
// }
// person3.name
//
//
//
//
// // arrays
// const person4 = {
//   name: 'Nikolai',
//   age: 27,
//   hobbies: ['ski', 'boardgames'],
// }
// let favouriteActivities1: string[];
// // favouriteActivities1 = ['drive', 1];
//
// let favouriteActivities2: any[];
// favouriteActivities2 = ['drive', 1];
//
//
// for (const hobby of person4.hobbies) {
//   console.log(hobby.toUpperCase());
// }
//
//
//
// // tuples
// const person5: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string] // tuple type
// } = {
//   name: 'Nikolai',
//   age: 27,
//   hobbies: ['ski', 'boardgames'], // array
//   role: [2, 'author'], // tuple
// }
//
// person5.role[0] = 1
// person5.role[1] = 'hello'
// person5.role = [6, 'driver']
// // person5.role = [4, 'artist', 234]
//
//
//
//
// // enum
// enum Role {
//   DRIVER = 5,
//   ARTIST = 'Awesome Artist'
// }
//
// const person6 = {
//   name: 'Nikolai',
//   age: 27,
//   hobbies: ['ski', 'boardgames'],
//   role: Role.ARTIST
// }
//
// console.log(person6.role)
//
//
// // any
// let x: any
// x = 5
// x = 'hello'
//
// let array1: any[]
// array1 = ['hello', 1, 3, true]
//
//
//
//
// // union types
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-string' // literal union type
// ): number | string {
//
//   let result;
//   // in ts below type-checks not always requred as in our case
//   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion == 'as-number') {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
//
// let res1 = combine(30, '26', 'as-string');
// console.log(res1);
//
// let res2 = combine('4', '3', 'as-number')
// console.log(res2)
//
// let res3 = combine('Max', 'Anna', 'as-string');
// console.log(res3);
//
//
//
// // alias
// type combinable = string | number
//
// let y: combinable[]
// y = ['hello', 7, 'hi']
//
//
//
// // void type
// function printResult1(num: number) {
//   console.log('Result: ' + num);
// }
//
// // same as above
// function printResult2(num: number): void {
//   console.log('Result: ' + num);
//   return; // optional here
// }
//
// // same as above
// function printResult3(num: number): undefined {
//   console.log('Result: ' + num);
//   return; // required here because of undefined return type
// }
//
//
//
// // function types
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
//
// let myVar: Function;
//
// myVar = add
// // myVar = 10
//
//
// let myVarFun: (a: number, b: number) => number
// myVarFun = add
// // myVarFun = printResult1
//
//
//
// // anonymous function
//
// function addAndHandle(n1: number, n2: number, fn: (n: number) => void) {
//   fn(n1 + n2);
// }
//
// addAndHandle(1, 5, (result) => {
//   console.log(result);
//   return 'a'; // ts allows despite void return type. It's done intentionally
// })
//
//
//
// // unknown type
// let userInputUnknown: unknown
// let userInputAny: any
// let userName: string
//
// // unknown similar to any, though it's more restrictive
// userInputUnknown = '5';
// // userName = userInputUnknown
//
// userInputAny = '5';
// userName = userInputAny;
//
//
// // never return type
//
// // by default it's assumed void return type
// function generateError1(message: string, code: number) {
//   throw {message: message, errorCode: code}
// }
//
// // never is new ts type, you might indicate explicitly that it never returns anything, even undefined
// function generateError2(message: string, code: number): never {
//   throw {message: message, errorCode: code}
// }
//
//
//
//
// // other examples
// const button = document.querySelector('button')! as HTMLButtonElement
// button.addEventListener('click', (ev) => {
//   console.log('clicked!');
// });
//
//
//
//
//
//
//
// const array = [5]
// const [left, right] = array;
// console.log(left, right);
