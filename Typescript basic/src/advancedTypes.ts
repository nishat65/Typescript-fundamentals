// decodeURI
const sum = (num1: number, num2: number = 5): number => {
    return num1 + num2;
};

// Advanced Types
// 1.------------Intersection types------------
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: string;
};

type ElevatedEmployee = Admin & Employee;

const newEmp: ElevatedEmployee = {
    name: 'Nishat',
    privileges: ['adminpanel'],
    startDate: new Date().toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }),
};

type stringNum = string | number;
type boolNum = string | boolean;

type union = stringNum & boolNum;

console.log(sum(1));
console.log(newEmp);

// --------Type Gaurd------------

function add(a: stringNum, b: stringNum): stringNum {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type unknownEmployee = Employee | Admin;

function printInformation(emp: unknownEmployee) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}

printInformation(newEmp);

class Car {
    drive() {
        console.log('drive car');
    }
}

class Truck {
    drive() {
        console.log('drive truck');
    }

    loadCargo() {
        console.log('loading cargo');
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) vehicle.loadCargo();
}

useVehicle(v2);

// --------- DESCRIMINATED INTERFACE --------
interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving speed with at ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 45 });

const paragraph = document.querySelector('p');
const paragraph1 = document.querySelector('#message-output');
// const input = <HTMLInputElement>document.querySelector('#user-input');
const input = document.querySelector('#user-input')! as HTMLInputElement;

input.value = 'Hi there!';

interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: 'Invalid string',
    username: 'Invalid username',
};

console.log(errorBag);

//----------FUNCTION OVERLOADING--------
function divide(num1: number, num2: number): number;
function divide(num1: string, num2: string): string;
function divide(num1: string, num2: number): string;
function divide(num1: stringNum, num2: stringNum) {
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return num1.toString() + num2.toString();
    }
    return num1 / num2;
}
const resultant = divide('string', 'string');
console.log(resultant.toUpperCase());

//------OPTIONAL CHAINING-------------
const fetchedUserData = {
    id: 1,
    name: 'nishat',
    job: { title: 'Hacker', description: 'A gray hat' },
};

console.log(fetchedUserData?.name.toUpperCase());

// ----NULLISH COALESCE-----------Null/default

const user = null;

const inputData = user ?? 'default';

console.log(inputData);
