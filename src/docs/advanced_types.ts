// // intersection types. Basically it's analogy to interfaces and inheritance
//
// // REMEMBER:
// // 1. interfaces and custom types don't exist in runtime
// // 2. classes exist at runtime
//
//
// type Admin = {
//   name: string;
//   privileges: string[];
// }
//
// type Employee = {
//   name: string;
//   startDate: Date;
// }
//
// type ElevatedEmployee = Admin & Employee;
//
// const e1: ElevatedEmployee = {
//   name: 'John',
//   privileges: ['read', 'write'],
//   startDate: new Date()
// }
//
// // one feature of intersection types is 'intersection'. It can't be achieved with interfaces:
// type Combinable = number | string;
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric; // this is numeric, because it's the only 'intersection'
//
//
// // type guards
//
// // sometimes it's possible to add type guard using typeof:
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//
//   }
//   return a + b;
// }
//
// // but deem following example:
// type UnknownEmployee = Employee | Admin;
//
// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   // console.log(emp.privileges); // does not work!
//
//   // How to access emp.privileges?
//   // We cannot add if (typeof emp === 'Employee' ) {... }, because typeof emp will be 'object' at runtime!!
//   // Javascript does not know anything about 'Employee' and 'Admin' types at runtime!!
//
//   if ('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//
//   if ('startDate' in emp) {
//     console.log('Start Date: ' + emp.startDate);
//   }
// }
//
// // classes type guard:
// class Car {
//   drive() {
//     console.log('Driving...')
//   }
// }
//
// class Truck {
//   drive() {
//     console.log('Slow driving...')
//   }
//
//   loadCargo() {
//     console.log('Loading cargo...');
//   }
// }
//
// function useVehicle(v: Car | Truck) {
//   v.drive();
//
//
//   if (v instanceof Truck) { // classes exist on runtime, but if typeof v will be still 'object'!!!!
//     v.loadCargo();
//   }
// }
//
// useVehicle(new Truck());
//
// // Discriminated union:
//
// // naive approach:
// interface Bird1 {
//   flyingSpeed(): void;
// }
//
// interface Horse1 {
//   runningSpeed(): void;
// }
//
// type Animal1 = Bird1 | Horse1;
//
// function moveAnimal1(a: Animal1) {
//   if ('flyingSpeed' in a) {
//     a.flyingSpeed();
//   }
//
//   if ('runningSpeed' in a) {
//     a.runningSpeed();
//   }
// }
//
//
// // typescript way - discriminated union
// // we mark each interface with type: '...', to understand it on runtime which object time we are working with
//
// interface Bird2 {
//   type: 'bird';
//
//   flyingSpeed(): void;
// }
//
// interface Horse2 {
//   type: 'horse';
//
//   runningSpeed(): void;
// }
//
// type Animal2 = Bird2 | Horse2;
//
// function moveAnimal2(a: Animal2) {
//   switch (a.type) {
//     case 'bird':
//       a.flyingSpeed();
//       break;
//     case 'horse':
//       a.runningSpeed();
//       break;
//   }
// }
//
// const myBird: Bird2 = {type: 'bird', flyingSpeed: () => console.log()}
//
//
// // type casting
//
// // ex1 (this notation also used in react, but means different thing, so people prefer not using it for type casts):
// // const myInput1 = <HTMLInputElement>document.getElementById('myInput')!;
// // myInput1.value = 'Hello World';
//
// // ex2:
// // const myInput2 = document.getElementById('myInput')! as HTMLInputElement;
// // myInput2.value = 'Hello World';
//
//
// // Index properties. Allows adding properties dynamically using special syntax
// interface ErrorContainer { // {email: 'error in email', name: 'error in email'}
//   id: string;
//
//   [prop: string]: string;
// }
//
// const errorBag: ErrorContainer = {
//   id: '#123',
//   email: 'error in email',
//   name: 'error in name',
//   1: 'another error'
// }
//
//
// // function overloads 'clarifies' function contract on more narrow types:
// type strOrNum = number | string;
//
// function multiply(a: number, b: number): number
// function multiply(a: string, b: number): string
// function multiply(a: strOrNum, b: number) {
//
//   if (typeof a === 'string') {
//     let res = '';
//     for (let i = 0; i < b; i++) {
//       res += a.toString();
//     }
//     return res;
//   }
//
//   return +a * b;
// }
//
// console.log(multiply('-', 5));
// console.log(multiply(6, 5));
//
//
//
//
// // optional chaining:
// const fetchedUser = {
//   name: 'Michael Scott',
//   job: {name: 'Manager', company: 'Dunder Mifflin'}
// }
//
// const jobName = fetchedUser.job && fetchedUser.job.name; // js style
// const jobCompany = fetchedUser?.job?.company
//
//
//
// // null coalescing:
// let i = null ?? 'DEFAULT'; // if not null or undefined => 'DEFAULT'
// i = '' ?? 'DEFAULT' // null, undefined, '' => will be printed 'DEFAULT'
//
// // with || - '', 0, false, null, undefined result into default value
// // with ?? only null, undefined result into default value
