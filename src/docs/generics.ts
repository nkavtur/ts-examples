// //
// const names: Array<string> = ['Max', 'John'];
//
// const promise = new Promise<string>((resolve, reject) => {
//
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2_000);
// });
//
// promise.then(data => {
//   console.log(data);
// });
//
//
// // creating generic function which returns object intersection!!!
// function merge<T extends object, U extends object>(a: T, b: U) {
//   return Object.assign(a, b); // returns T & U
// }
//
// let c = merge({name: 'John'}, {surname: 'Doe', hobbies: ['a', 'b']});
// const {surname, ...remaining} = {...c};
//
//
// // another example with restriction using custom interface:
// type Lengthy = {
//   length: number;
// }
//
// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = 'Got empty element.';
//   if (element.length === 1) {
//     descriptionText = 'Got 1 length element';
//   } else if (element.length > 1) {
//     descriptionText = 'Got multiple values for element';
//   }
//   return [element, descriptionText];
// }
//
// console.log(countAndDescribe('hello'));
// console.log(countAndDescribe(['a', 'b', 'c']));
// console.log(countAndDescribe(''));
//
//
// // keyof restriction
// function extractAndConvert<T, U extends keyof T>(obj: T, key: U) {
//   return `Values of key = ${key} is ${obj[key]}`;
// }
//
// console.log(extractAndConvert({surname: 'Doe'}, 'surname'));
//
//
// // generic classes:
// class DataStorage<T> {
//
//   constructor(private data: T[] = []) {
//   }
//
//   addItem(value: T) {
//     this.data.push(value);
//   }
//
//   removeItem(value: T) {
//     this.data.splice(this.data.indexOf(value), 1);
//   }
//
//   getItems() {
//     return [...this.data];
//   }
// }
//
// const fruitsStorage = new DataStorage<string>(['banana', 'apple']);
// fruitsStorage.addItem('orange');
// fruitsStorage.addItem('orange');
// fruitsStorage.removeItem('banana');
// console.log(fruitsStorage.getItems());
//
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: 'Max'});
// objectStorage.addItem({name: 'John'});
// objectStorage.removeItem({name: 'Max'}); // this won't work, because object does not implement 'equals'
// console.log(objectStorage);
//
//
// // utility helper types
// // 1. Partial (makes all properties optional)
// type CourseGoal = {
//   title: string;
//   description: string;
//   date: Date;
// }
//
// function createCourseGoal(title: string,
//                           description: string,
//                           date: Date): CourseGoal {
//
//   let result: Partial<CourseGoal> = {};
//   result.title = title
//   result.description = description;
//   result.date = date;
//   return result as CourseGoal;
// }
//
//
// // Readonly type
// const array: Readonly<string[]> = ['John', 'Mark'];
// // array[0] = 'James'; // tsc error
// console.log(array[0]);
//
//
//
//
