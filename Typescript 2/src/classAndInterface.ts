///   <reference path="namespace.ts"/>

abstract class Company {
 protected company: string
 constructor(company: string) {
  this.company = company
 }
 abstract describeCompanyName(this: Company): void

 greet() {
  return 'Hello'
 }
}

class Department extends Company {
 protected ceo: string = ''

 constructor(private readonly id: string | number, public name: string, company: string) {
  super(company)
 }

 describeNumber(n: number): void {
  if (n === 1) console.log(`There is ${1} ${this.name.toUpperCase()} department`)
  else console.log(`There are ${n} ${this.name.toUpperCase()} departments`)
 }

 describeCompanyName() {
  console.log(`Name : ${this.company}`)
 }
}

class It extends Department {
 admin: string[]

 private report?: string

 get todaysReport() {
  if (this.report) return this.report
  return 'no value found'
 }

 set todaysReport(report: string) {
  this.report = report
 }

 constructor(id: string | number, admin: string[], company: string, report?: string) {
  super(id, 'It', company)
  this.admin = admin
  this.report = report
 }

 describeCeo(): void {
  this.ceo = 'Nishat'
 }
}

// const itDepartment = new It(2, ['Nishat'], 'Yahoo')
// itDepartment.describeNumber(1)
// itDepartment.describeCeo()
// itDepartment.todaysReport = 'working'
// console.log(itDepartment);
// console.log(itDepartment.todaysReport);

// INTERFACES ROCK

interface Person {
 name: string
 age: number
 desc(): string
 fullName?(lastName: string): string
}

const obj: Person = {
 name: 'Nishat',
 age: 25,
 desc() {
  return `Name: ${this.name}, age: ${this.age}`
 },
 fullName(lastName: string) {
  return `${this.name} ${lastName}`
 }
}

function displayName() {
 if (obj.fullName) {
  console.log(obj.fullName('Roy'));
 }
}

// displayName()
// console.log(obj.desc());

type medals = {
 gold: number,
 silver: number,
 bronze: number
}

interface Retired {
 readonly retired: boolean
}

class Athlete implements Person, Retired {
 constructor(
  public name: string,
  public age: number,
  readonly retired: boolean,
  protected medals: medals[]) { }
 desc() {
  return `Name: ${this.name}, age: ${this.age}`
 }

 fullName(lastName: string) {
  return `${this.name} ${lastName}`
 }

}

const athlete = new Athlete('Milkha', 88, true, [{ gold: 2, silver: 4, bronze: 5 }])

// console.log(athlete);
// console.log(athlete.fullName('Singh'));

type Heroes = {
 name: string;
}

type Powers = {
 powers: string[];
}

// interface Heroes {
//     name: string;
// }

// interface Powers {
//     powers: string[];
// }

// interface Human extends Heroes, Powers { }

type Human = Heroes & Powers

const hero: Human = {
 name: 'Superman',
 powers: ['flight', 'xray']
}

// console.log(hero);

interface errorMsg {
 [props: string]: string
}

const errHandler: errorMsg = {
 email: 'Email required!',
 password: 'Password required!',
}

// console.log(errHandler);

// GENERICS

function merge<T, U>(obj1: T, obj2: U) {
 return Object.assign(obj1, obj2)
}

const result = merge({ name: 'nishat' }, { age: 23 })
// console.log(result.name);

function mergeNew<T extends object, U extends object>(obj1: T, obj2: U) {
 return Object.assign(obj1, obj2)
}

const resultNew = mergeNew({ name: 'nishat' }, { age: 23 })
// console.log(resultNew.name);

type Length = {
 length: number
}

function countArrayLength<T extends Length>(element: T): [number] {
 if (element.length) {
  return [element.length]
 }
 if (element.length === 0) {
  return [0]
 }
 return [0]
}
const countArray = countArrayLength([23])
const countString = countArrayLength('Hi there')
// console.log(countArray);
// console.log(countString);

class Warehouse<T> {
 data: T[]
 constructor(data: T[]) {
  this.data = data
 }

 addItem(data: T) {
  this.data.push(data)
 }
}

const wh = new Warehouse<string>([])
const whOne = new Warehouse<number>([])

wh.addItem('Vegetables')
whOne.addItem(1)
whOne.addItem(2)
whOne.addItem(3)
// console.log(wh)
// console.log(whOne)

interface TodoGoal {
 title: string,
 activities: string[],
 date: string
}

function todoStatus(title: string, activities: string[], date: string): TodoGoal {
 let todo: Partial<TodoGoal> = {}
 todo.title = title
 todo.activities = activities
 todo.date = date
 return todo as TodoGoal;
}

let t = todoStatus('Monday-Mundane',
 ['cooking', 'singing', 'painting'],
 new Date().toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' }))

// console.log(t);

namespace App {
 type collection = store & manager
 const StoreHouse: collection = {
  name: 'Food-Warhouse',
  items: ['Apples', 'Bananas', 'Pineapple'],
  fullname: 'Mr Nishat Roy'
 }
 console.log(StoreHouse)

 const displayStoreCollection: displayCollection = (items: string[]) => {
  return items
 }

 if (StoreHouse.items) {
  const storeCol = displayStoreCollection(StoreHouse.items)
  console.log(storeCol);
 }
}

// Declare
declare const LOCATION: string
console.log(LOCATION);
