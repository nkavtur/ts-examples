// class Department1 {
//   private id: string;
//   name: string;
//   private employees: string[] = []
//
//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }
//
//   describe1() {
//     console.log('Department: ' + this.name);
//   }
//
//   describe2(this: Department1) { // safe method to prevent using it outside objects.
//     console.log('Department: ' + this.name);
//   }
//
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }
//
//   printEmployeesInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
//
// // simple class method vs 'safe' class method
// const accounting = new Department1('#1234', 'Accounting');
// accounting.describe1();
//
// const accountCopy1 = {describe: accounting.describe1}
// accountCopy1.describe(); // will be 'Department: undefined'
//
// const accountCopy2 = {describe: accounting.describe2}
// // accountCopy2.describe(); // not compiled, because describe2 can be called only for Department object.
//
// accounting.addEmployee('Max');
// accounting.addEmployee('Steve');
//
// // accounting.employees.push('Anna'); // does not work, because it's private. Public is default access modifier!
//
// accounting.describe1();
// accounting.printEmployeesInformation();
//
//
// // Short class declaration
// class Department2 {
//
//   constructor(private readonly id: string,
//               public name: string,
//               private employees: string[] = []) {
//   }
//
//   addEmployee(employee: string) {
//     // this.id = '#412'; // does not work, as readonly
//     this.employees.push(employee);
//   }
//
//   describe() {
//     console.log();
//   }
//
//   printEmployeesInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }
//
// const salesDepartment = new Department2('#321', 'Sales');
//
//
// // Inheritance
// // protected works for accessing parent properties/methods
// class ItDepartment extends Department2 {
//
//
//   constructor(private admins: string[] = []) {
//     super('#123', 'IT');
//   }
//
//   hackBank() {
//     console.log('hacking bank');
//   }
// }
//
// const itDepartment = new ItDepartment(['admin1', 'admin2']);
// itDepartment.addEmployee('Vasya');
// console.log(itDepartment);
//
//
// // getters and setters
// class AccountingDepartment extends Department1 {
//
//   private _lastReport: string;
//
//   constructor(private reports: string[] = []) {
//     super('#637', 'Accounting');
//     this._lastReport = reports[0]; // it will work in ts even for empty arrays!!! :(
//   }
//
//   addReport(report: string) {
//     this.reports.push(report);
//     this._lastReport = report;
//   }
//
//   get lastReport(): string {
//     return this._lastReport;
//   }
//
//   set lastReport(report: string) {
//     this.addReport(report);
//   }
// }
//
// const accountingDepartment = new AccountingDepartment();
// accountingDepartment.addReport('December 2021');
// console.log(accountingDepartment.lastReport);
//
//
// // static methods/properties
// class EmployeeFactory {
//
//   static FISCAL_YEAR = 2022;
//
//   static creatEmployee(name: string) {
//     return {name: name};
//   }
// }
//
// console.log(EmployeeFactory.creatEmployee('John'));
// console.log(EmployeeFactory.FISCAL_YEAR);
//
//
// // abstract classes and methods
// abstract class Company {
//
//   protected constructor(private _name: string) {
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
//   abstract describe(language: string): void;
//
// }
//
// class ItCompany extends Company {
//
//   constructor(name: string) {
//     super(name);
//   }
//
//   describe(language: string): void {
//     if (language === 'ru') {
//       console.log(`${this.name} очень крутая IT-компания!`);
//     } else {
//       console.log(`${this.name} is super nice IT company!`);
//     }
//   }
// }
//
//
// const company = new ItCompany('Akamai');
// company.describe('ru');
//
//
//
// // interface:
// // REMEMBER: interfaces and custom types only exist at compile time!!!!
// // Classes information exist in runtime. It can be retrieved using 'instanceof'. typeof will always return 'object'
//
// interface Person {
//   name: string;
//   age: number;
//
//   greet(phrase: string): void;
// }
//
//
// // class implements interface
// class PersonImpl implements Person {
//
//   constructor(private _name: string, private _age: number) {
//   }
//
//   greet(phrase: string): void {
//     console.log(phrase + '! ' + 'My name is ' + this._name + ', I am ' + this._age);
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
//   get age(): number {
//     return this._age;
//   }
//
//   set age(value: number) {
//     this._age = value;
//   }
// }
//
//
// // or object implements interface
// let user: Person = {name: 'John', age: 27, greet: phrase => console.log(phrase)};
// user.greet('hello');
//
//
// // declaring function type
//
// // following are same things:
// // using type:
// type AddFn1 = (a: number, b: number) => number // 1
// let x1: AddFn1;
// x1 = (a, b) => a + b;
//
// // using interface
// interface AddFn2 {
//   (a: number, b: number): number
// }
//
// let x2: AddFn2;
// x2 = (a, b) => a + b;
//
//
//
// // optional property
// class MyPerson {
//   constructor(private name: string, private surname?: string) {
//   }
// }
//
// console.log(new MyPerson('John'));
// console.log(new MyPerson('John', 'Doe'));
