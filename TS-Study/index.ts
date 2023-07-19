console.log('Hello there!');
// tsc .\index.ts
// node .\index.js

/* Basic Types */
// const, let, var
const personName: string = "Pratik";
const age: number = 25;
const isFemale: boolean = false;
const nothingHere: undefined = undefined;
const nullHere: null = null;
const personNames: string[] = [];

// Dynamic and Static
var x: string = "abcd";
// x = 123; // Throws an error since variable x is a string
console.log(typeof (personName));

// Annotating types in an object
const person: { name: string, age: number, isMale: boolean } = { name: 'Peter', age: 45, isMale: true };
console.log(person);

// Creating custom types
type Person = { name: string, age: number, isMale: boolean };
const person2: Person = { name: 'Peter', age: 45, isMale: true };
console.log(person2);

// Union types
let nickName: string | Person;
nickName = 'asdf';
nickName = person;
// nickName = true; // Throws an error since variable nickName is of type string or Person

console.log(nickName);

/* Variable declaration for dynamic type */
let z: any = 'abc';
z = 123;


/* Functions */
const add = (a: number, b: number): number => a + b;
console.log(add(10, 2));

function multiply(a: number, b: number) {
    return a * b;
}


// Q1: Write TS function which takes Person object type as argument and print its details to console

// type Person = { name: string, age: number, isMale: boolean };
const person3: Person = { name: 'Pratik', age: 25, isMale: true };

const printPersonDetails = function (person: Person) {
    console.log(`Name: ${person.name}, Age: ${person.age}, Gender: ${person.isMale ? "Male" : "Female"}
`);
}

printPersonDetails(person3);
