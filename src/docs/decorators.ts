// // class decorator example:
// function Logger1(constructor: Function) {
//   console.log('Logging...');
//   console.log(constructor);
// }
//
// @Logger1
// class Person1 {
//   constructor(private name = 'Max') {
//     console.log('Creating person...');
//   }
// }
//
// new Person1();
//
//
// // decorator factory example:
// function WithTemplate(template: string, hookId: string) {
//
//   // generic decorator function that returns T.
//   // T - is subclass of constructor which accepts any[] arguments and returns object with name, surname properties.
//   return function <T extends { new(...args: any[]): { name: string, surname: string } }>(originalConstructor: T) {
//
//     // extend original constructor
//     // and add custom logic when Person class will be instantiated!!!!
//     return class extends originalConstructor {
//       constructor(..._: any[]) {
//         super();
//         let hookEl = document.getElementById(hookId);
//         if (hookEl) {
//           hookEl.innerHTML = template;
//           hookEl.querySelector('h1')!.innerText = `${this.name} ${this.surname}`;
//         }
//       }
//     };
//   };
// }
//
// @Logger1                           // 2. executed second
// @WithTemplate('<h1></h1>', 'myId') // 1. executed first
// class Person2 {
//
//   constructor(private _name: string, private _surname: string) {
//     console.log('I am here!!');
//   }
//
//   get name(): string {
//     return this._name;
//   }
//
//   set name(value: string) {
//     this._name = value;
//   }
//
//   get surname(): string {
//     return this._surname;
//   }
//
//   set surname(value: string) {
//     this._surname = value;
//   }
// }
//
// console.log(new Person2('John', 'Doe'));
//
//
// // Different property Decorators:
//
// // Decorators are running without class instantiation.
// // Decorators allow does behind the scene logic when class/method/accessor is defined.
//
// function PropertyLog(target: any, propertyName: string | Symbol) { // can't return anything. ts will ignore it.
//   console.log('Property Decorator');
//   console.log(target);
//   console.log(propertyName);
// }
//
// function AccessorLog(target: any, name: any, descriptor: PropertyDescriptor) { // can return value!
//   console.log('Accessor Decorator');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }
//
// function MethodLog(target: any, name: any, descriptor: PropertyDescriptor) { // can return value!
//   console.log('Method Decorator');
//   console.log(target);
//   console.log(name);
//   console.log(descriptor);
// }
//
// function ArgumentLog(target: any, name: string | Symbol, position: number) { // can't return value! ts will ignore it.
//   console.log('Argument Decorator');
//   console.log(target);
//   console.log(name);
//   console.log(position);
// }
//
// class Product {
//
//   private _price: number;
//   @PropertyLog // executes when property defined - without creating class. Immediately.
//   private description: string;
//
//   constructor(price: number, description: string) {
//     this._price = price;
//     this.description = description;
//   }
//
//   @AccessorLog
//   get price(): number {
//     return this._price;
//   }
//
//   set price(value: number) {
//     if (value < 0) {
//       throw {message: 'Price should be > 0'};
//     }
//     this._price = value;
//   }
//
//   @MethodLog
//   private getPriceWithTax(@ArgumentLog tax: number) {
//     return this.price * (1 + tax);
//   }
// }
//
// // const p = new Product(123, 'Keyboard');
//
//
// // Example of useful method decorator:
//
// function Autobind(target: any, name: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return originalMethod.bind(this); // Here's the trick. this will refer to our class when it's executed, not decorator's 'this'.
//     }
//   };
//
//   return adjDescriptor;
// }
//
// class Printer {
//
//   constructor(private _message: string) {
//   }
//
//   @Autobind
//   showMessage() {
//     console.log(this._message);
//   }
// }
//
//
// const printer = new Printer('This works!');
//
// const button = document.querySelector('button')!;
// button.addEventListener('click', printer.showMessage);
//
//
//
//
//
//
// // Validation using Decorators:
//
// interface ValidatorConfig {
//   [property: string]: {
//     [validatableProperty: string]: string[] // 'required', 'positive'
//   };
// }
//
// const registeredValidators: ValidatorConfig = {};
//
// function Required(target: any, propertyName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propertyName]: [...(registeredValidators[target.constructor.name]?.[propertyName] ?? []), 'required']
//   };
// }
//
// function Positive(target: any, propertyName: string) {
//   registeredValidators[target.constructor.name] = {
//     ...registeredValidators[target.constructor.name],
//     [propertyName]: [...(registeredValidators[target.constructor.name]?.[propertyName] ?? []), 'positive']
//   };
// }
//
// function validate(object: any) {
//   const objectValidatorsConfig = registeredValidators[object.constructor.name];
//   console.log(objectValidatorsConfig);
//
//   if (!objectValidatorsConfig) {
//     return true;
//   }
//
//   let result = true;
//   for (const prop in objectValidatorsConfig) {
//     for (const validator of objectValidatorsConfig[prop]) {
//
//       switch (validator) {
//         case 'required':
//           result = result && !!object[prop];
//           break;
//
//         case 'positive':
//           result = result && object[prop] > 0;
//           break;
//       }
//     }
//   }
//
//   return result;
// }
//
// class Course {
//
//   @Required
//   private _title: string;
//
//   @Positive
//   private _price: number;
//
//   constructor(title: string, price: number) {
//     this._title = title;
//     this._price = price;
//   }
//
//   get title(): string {
//     return this._title;
//   }
//
//   set title(value: string) {
//     this._title = value;
//   }
//
//   get price(): number {
//     return this._price;
//   }
//
//   set price(value: number) {
//     this._price = value;
//   }
// }
//
// const form = document.querySelector('form')!;
// form.addEventListener('submit', event => {
//   event.preventDefault();
//
//   const titleEl = document.getElementById('title') as HTMLInputElement;
//   const priceEl = document.getElementById('price') as HTMLInputElement;
//
//   const title = titleEl.value;
//   const price = +priceEl.value;
//
//   const createdCourse = new Course(title, price);
//   console.log(validate(createdCourse));
// });
