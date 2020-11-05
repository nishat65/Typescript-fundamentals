// -------DECORATORS---------
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
    return function (constructor: any) {
        console.log('rendering template');
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.age;
        }
    };
}

@Logger2('Logging - Person')
@WithTemplate('<h1>Person <h1/>', 'app')
class Person {
    name: string;
    age = 25;
    constructor(name: string) {
        console.log('creating Person object!');
        this.name = name;
    }
}

const p = new Person('Nishat');
console.log(p);

//-----------------

// 1.Property Decorator
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator');
    console.log(target, propertyName);
}

// 2.Accessor Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!');
    console.log(target, name, descriptor);
}

// Method Decorator
function Log3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor
) {
    console.log('Method decorator!');
    console.log(target, name, descriptor);
}

// Parameter Decorator
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter Decorator');
    console.log(target, name, position);
}

class Product {
    @Log
    title: string;
    @Log
    private _price: number;

    @Log2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error('price must be greater than 0');
        }
    }

    constructor(t: string, _p: number) {
        this.title = t;
        this._price = _p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax);
    }
}

const pro = new Product('Book', 3);
console.log(pro);
