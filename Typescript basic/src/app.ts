// -------DECORATORS EXAMPLES---------

function Logger(constructor: Function) {
    console.log('logging');
    console.log(constructor);
}

// factory decorators
function Logger2(logstring: string) {
    console.log('LOGGER FACTORY');
    return function (constructor: Function) {
        console.log(logstring);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY');
    return function <T extends { new (...args: any[]): { lastName: string } }>(
        originalConstructor: T
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log('rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.lastName;
                }
            }
        };
    };
}

@Logger2('Logging - Person')
@WithTemplate('<h1>Person <h1/>', 'app')
class Person {
    name: string;
    lastName = 'Roy';
    age = 25;
    constructor(name: string) {
        console.log('creating Person object!');
        this.name = name;
    }
}

function AutoBind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

const p = new Person('Nishat');
console.log(p);

class Printer {
    message = 'This works!';

    constructor() {}
    @AutoBind
    showMessage() {
        console.log(this.message);
    }
}

const pr = new Printer();

pr.showMessage();

document.querySelector('button')!.addEventListener('click', pr.showMessage);

// ------------

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[];
    };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    console.log(target);
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['required'],
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ['positive'],
    };
}

function validateCourse(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector('form')!;

courseForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validateCourse(createdCourse)) {
        alert('Input invalid.Please try again!');
        return;
    }
    console.log(createdCourse);
});
