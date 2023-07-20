"use strict";
console.log('Hello there!');
// tsc .\index.ts
// node .\index.js
/* Basic Types */
// const, let, var
const personName = "Pratik";
const age = 25;
const isFemale = false;
const nothingHere = undefined;
const nullHere = null;
const personNames = [];
// Dynamic and Static
var x = "abcd";
// x = 123; // Throws an error since variable x is a string
console.log(typeof (personName));
// Annotating types in an object
const person = { name: 'Peter', age: 45, isMale: true };
console.log(person);
const person2 = { name: 'Peter', age: 45, isMale: true };
console.log(person2);
// Union types
let nickName;
nickName = 'asdf';
nickName = person;
// nickName = true; // Throws an error since variable nickName is of type string or Person
console.log(nickName);
/* Variable declaration for dynamic type */
let z = 'abc';
z = 123;
/* Functions */
const add = (a, b) => a + b;
console.log(add(10, 2));
function multiply(a, b) {
    return a * b;
}
// Q1: Write TS function which takes Person object type as argument and print its details to console
// type Person = { name: string, age: number, isMale: boolean };
const person3 = { name: 'Pratik', age: 25, isMale: true };
const printPersonDetails = function (person) {
    console.log(`Name: ${person.name}, Age: ${person.age}, Gender: ${person.isMale ? "Male" : "Female"}
`);
};
printPersonDetails(person3);
//# sourceMappingURL=index.js.map