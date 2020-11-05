// -------------------Generics function-----------------

// --------BUILT IN GENERICS TYPES-----
// -----Array--------
const names: string[] = ['name1', 'name2'];
const namesGeneric: Array<string> = ['name1', 'name2'];
const hobbies: Array<string | number | boolean> = [1, 2, 4, 'a', true];
const firstName = 'Nishat' as string;
const lastName: string = 'Roy';
console.log(namesGeneric[0].toLocaleUpperCase());
console.log(hobbies);
console.log(firstName);
console.log(lastName);

// -----Promise--------
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is done');
    }, 2000);
});
promise.then((data) => {
    console.log(data.toLocaleUpperCase());
});

function mergeObj<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}
const mergedObj = mergeObj({ name: 'nishat' }, { age: 34 });
console.log(mergedObj.name);

// TYPES CONSTRAINTS------
function addNumber<T extends number, U extends number>(num1: T, num2: U) {
    return num1 + num2;
}

console.log(addNumber(2, 3));

// ----------
interface Length {
    length: number;
}
function countAndPrint<T extends Length>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length > 0) {
        descriptionText = `Got ${element.length} elements`;
    }

    return [element, descriptionText];
}

console.log(countAndPrint(['string']));

// --------For object key-------
function ExtractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return obj[key];
}

console.log(ExtractAndConvert({ value: 3 }, 'value'));

//  ---GENERICS CLASSES---------
class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(value: T) {
        this.data.push(value);
    }
    removeItem(value: T) {
        this.data.splice(this.data.indexOf(value), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('nishat');
textStorage.addItem('roy');

textStorage.removeItem('roy');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(3);
numberStorage.addItem(5);

numberStorage.removeItem(3);
console.log(numberStorage.getItems());

// ----BUILT IN GENERICS PROVIDED BY TYPESCRIPT----

// 1.Partial
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    data: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = data;
    return courseGoal as CourseGoal;
}

// ----READ ONLY TYPES--------

const namesArray: Readonly<string[]> = ['x', 'y'];

// namesArray.push('h');
