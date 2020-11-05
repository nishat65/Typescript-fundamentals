// -------Classes---------

class Department {
    // private id: string;
    // private name: string;
    static fiscalYear = 2020;
    public sal: number; //Property 'sal' does not exist on type 'Department'.To fix this
    protected employees: string[] = []; //private -> Modifiers

    constructor(
        public name: string,
        protected readonly id: string,
        sal: number
    ) {
        //Using access modifiers
        // this.id = id
        // this.name = name;
        this.sal = sal;
    }

    static createEmployee(name: string) {
        return { name };
    }

    // describe(this: Department): void {
    //     console.log(
    //         `Department ${
    //             this.id
    //         }:${this.name.toUpperCase()} with average salary: ${this.sal}`
    //     );
    // }

    describe(this: Department): void {
        console.log(
            `Department ${
                this.id
            }:${this.name.toUpperCase()} with average salary: ${this.sal}`
        );
    }

    addEmployee(employee: string) {
        // this.id = 3 Cannot assign to 'id' because it is a read-only property.
        this.employees.push(employee);
    }

    printEmployeesInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('Accounting', '1', 3000);
// accounting.employees[2] = 'ff' -> Property 'employees' is private and only accessible within class 'Department'.
console.log(accounting);
console.log(Department.createEmployee('Mavern'));
console.log(Department.fiscalYear);
accounting.describe();
accounting.addEmployee('vs');
accounting.addEmployee('sam');
accounting.printEmployeesInformation();

// const accountingCopy = { name: 's', describe: accounting.describe };
// accountingCopy.describe();

class ItDepartment extends Department {
    private lastReport: string[];

    get lastReportInfo() {
        if (this.lastReport) return this.lastReport;
        throw new Error('No reports found!!');
    }

    set mostRecentReport(name: string) {
        this.addReport(name);
    }

    admins: string[];
    constructor(
        name: string,
        id: string,
        sal: number,
        admins: string[],
        lastReport: string[]
    ) {
        super(name, id, sal);
        this.admins = admins;
        this.lastReport = lastReport;
    }

    //Method overriding
    describe(): void {
        console.log(
            `Department ${
                this.id
            }:${this.name.toUpperCase()} with average salary: ${this.sal}`
        );
    }

    addEmployee(name: string) {
        if (name === 'Nishat') return;
        this.employees.push(name);
    }

    addReport(name: string) {
        this.lastReport.push(name);
    }

    printAdmins() {
        console.log(this.admins);
        console.log(this.employees);
    }
}

const it = new ItDepartment('It', '2', 3000, ['Nishat'], ['success']);
it.mostRecentReport = 'Server failure'; // setter of class
console.log(it.lastReportInfo); // getter of class
it.addEmployee('Sima');
console.log(it);
it.describe();
it.printAdmins();

// ---SINGLETON FEATURE----
class AdminPerson extends Department {
    private static instance: AdminPerson;
    private constructor(name: string, id: string, sal: number) {
        super(name, id, sal);
    }

    static getInstance() {
        if (AdminPerson.instance) {
            return this.instance;
        }
        this.instance = new AdminPerson('Nishat', 'A1', 4000);
        return this.instance;
    }
}

// const adminPerson = new AdminPerson('Nishat', 'A1', 4000);
console.log(AdminPerson.getInstance());
