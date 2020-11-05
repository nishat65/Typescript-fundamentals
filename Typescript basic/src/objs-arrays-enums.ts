// const person: { name: string; age: number } = {
//     name: 'Nishat',
//     age: 25,
// };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string] //tuple
//  } = {
//     name: 'Nishat',
//     age: 25,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'],
// };
// person.role.push('admin');

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

// BETTER SYNTAX
const person = {
    name: 'Nishat',
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    // role: [2, 'author'],
};

let activities: string[] = [];

activities.push('Cooking');

console.log(person.name);
console.log(activities);

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log(`Welcome Adminstrator`);
}
