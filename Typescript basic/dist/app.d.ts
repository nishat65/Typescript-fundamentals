declare function Logger(constructor: Function): void;
declare function Logger2(logstring: string): (constructor: Function) => void;
declare function WithTemplate(template: string, hookId: string): <T extends new (...args: any[]) => {
    lastName: string;
}>(originalConstructor: T) => {
    new (..._: any[]): {
        lastName: string;
    };
} & T;
declare class Person {
    name: string;
    lastName: string;
    age: number;
    constructor(name: string);
}
declare function AutoBind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor;
declare const p: Person;
declare class Printer {
    message: string;
    constructor();
    showMessage(): void;
}
declare const pr: Printer;
interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[];
    };
}
declare const registeredValidators: ValidatorConfig;
declare function Required(target: any, propName: string): void;
declare function PositiveNumber(target: any, propName: string): void;
declare function validateCourse(obj: any): boolean;
declare class Course {
    title: string;
    price: number;
    constructor(t: string, p: number);
}
declare const courseForm: HTMLFormElement;
//# sourceMappingURL=app.d.ts.map