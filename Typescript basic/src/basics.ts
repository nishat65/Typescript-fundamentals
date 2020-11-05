function addNumber(
    num1: number,
    num2: number,
    showResult: boolean,
    phrase: string
) {
    if (showResult) {
        console.log(`${phrase} ${num1 + num2}`);
    }
    return num1 + num2;
}

function displayName(name: string) {
    return name;
}

const number1 = 23;
const number2 = 43.433;

const result = addNumber(number1, number2, true, 'Result');
const display = displayName('Nishat');

console.log(result);
// console.log(display);
