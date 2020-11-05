// -------INTERFACES---------

interface Person {
    name: string;
    age: number;
    greet(phrase: string): void;
}

let user1: Person = {
    name: 'Nishat',
    age: 23,
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    },
};
console.log(user1);
user1.greet('Ciao');

type addNum = (num1: number, num2: number) => number;
// OR
interface addNumInterface {
    (a: number, b: number): number;
}

let add: addNum;

add = (num1, num2) => {
    return num1 + num2;
};

//--------INTERFACE EXTENSIONS-----------------------//
interface Examples {
    namesEx: string[];
}

interface Animals extends Examples {
    readonly name: string;
    speciesName: string;
    // printName(): void;
    printName?(): void;
}

class Fish implements Animals {
    printName(): void;
    printName() {
        console.log(`name:${this.name}`);
    }
    constructor(
        public name: string,
        public speciesName: string,
        public namesEx: string[]
    ) {}
}

let f: Animals;

f = new Fish('mammels', 'Mammalia', ['shark', 'humans']);
f.printName!(); //! asserting that it can't be null.
console.log(f);
