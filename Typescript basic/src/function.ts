type obj = {
    name: string;
    age: number;
    displayName: (name: string) => string;
};

const Person: obj = {
    name: 'nishat',
    age: 34,
    displayName(name) {
        return name;
    },
};

function add(num1: number, num2: number): number {
    return num1 + num2;
}

function printResult(num: number) {
    console.log(num);
}

function addAndHandle(num1: number, num2: number, cb: (num1: number) => void) {
    let result = num1 + num2;
    cb(result);
}

const resultSum = add(23, 65);

let combineValues: (num1: number, num2: number) => number;

combineValues = add;
// printResult(result);
console.log(combineValues(31, 34));

addAndHandle(10, 20, (resultSum) => {
    console.log(resultSum);
});
