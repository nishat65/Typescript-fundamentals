// | -> union type
// | -> literal type

// ***********WITH ENUMS****************
// enum conversionCheck {
//     'as-num',
//     'as-string',
// }

// function combine(
//     input1: number | string,
//     input2: number | string,
//     resultConversion: conversionCheck
// ) {
//     let result;
//     if (
//         (typeof input1 === 'number' && typeof input2 === 'number') ||
//         resultConversion === conversionCheck['as-num']
//     ) {
//         result = +input1 + +input2;
//     } else {
//         result = input1.toString() + input2.toString();
//     }
//     return result;
// }

// const combineAges = combine(23, 45, conversionCheck['as-num']);
// // const combineStringAges = combine('23', '45', 'as-num');
// const combineNames = combine('Lion', 'Dear', conversionCheck['as-string']);

// console.log(combineAges);
// // console.log(combineStringAges);
// console.log(combineNames);

type CombinableConversion = 'as-num' | 'as-string';
type stringNum = number | string;

function combine(
    input1: stringNum,
    input2: stringNum,
    resultConversion: CombinableConversion
) {
    let result;
    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-num'
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineAges = combine(23, 45, 'as-num');
const combineStringAges = combine('23', '45', 'as-num');
const combineNames = combine('Lion', 'Dear', 'as-string');

console.log(combineAges);
console.log(combineStringAges);
console.log(combineNames);
