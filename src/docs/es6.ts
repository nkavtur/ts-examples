// // Let and const:
// const x = 'Max';
// // x = 'Test'
//
//
// let x2 = 27
// x2 = 13
//
// // let similar to var, but difference is in scopes
// // var knows only about global and function scope
//
// // For example in JS console.log will have access to result1 variable:
// // if (20 > 10) {
// //   var result1 = true;
// // }
// // console.log(result1);
//
// // But in TS console.log won't see result2 variable. It means let knows about all scopes. LET = VAR + all block scope (for, if, etc.)
// // if (20 > 10) {
// //   let result2 = true;
// // }
// // console.log(result2);
//
//
// let result2;
//
// function add(a: number, b: number) {
//   result2 = a + b;
//   return result2;
// }
//
// console.log(result2);
//
//
// // Arrow functions:
// const addFn = (a: number, b: number) => a + b
// console.log(addFn(2, 3))
//
// const printFn1 = (a: number | string) => console.log('Result is: ' + a);
// printFn1(addFn(3, 4));
//
// // to declare arrow function contract:
// let printFn2: (a: number | string) => void;
// printFn2 = a => console.log('Result is: ' + a); // short assignment
//
//
// // default values:
// const addFn3 = (a: number, b: number = 10) => a + b;
// console.log(addFn3(3, 7));
// console.log(addFn3(3));
//
//
// // The Spread Operator:
// const hobbies = ['Reading', 'Boardgames'];
// const activeHobbies = ['Hiking'];
//
// activeHobbies.push('hello', 'world');
// activeHobbies.push(...hobbies);
// console.log(activeHobbies);
//
// const person1 = {
//   name: 'Nikolai',
//   age: 28
// };
//
// // copy object!! Replace to angular.copy
// const person2 = {...person1};
//
//
// // Rest params:
// const addFn4 = (...numbers: number[]) => numbers.reduce((prev, curr) => prev + curr, 0);
// console.log(addFn4(2, 3, 4, 5, 6));
//
// // rest params can be used with tuples also:
// const addFn5 = (...numbers: [number, number, number]) => addFn4(...numbers);
// console.log(addFn5(2, 3, 4));
//
//
// // Object and array destructuring:
// const hobbies1 = ['Reading', 'Boardgames', 'Ski', 'Drive']
// const [hobby1, hobby2, ...remaining] = hobbies1;
// console.log(hobby1, hobby2, remaining);
//
// const person3 = {
//   firstName: 'Nikolai',
//   age: 28
// };
//
// // object destructuring
//
// // const {firstName, age} = {...person3}
// // console.log(firstName, age);
//
// // same as above, but shorter:
// const {firstName, age} = person3;
// console.log(firstName, age);
//
// // can override variable names:
// const {firstName: firstName1, age: age1} = person3;
// console.log(firstName1, age1);
//
