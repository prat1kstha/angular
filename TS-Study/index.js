console.log('Hello there!');
// tsc .\index.ts
// node .\index.js
/* Basic Types */
// const, let, var
var personName = "Pratik";
var age = 25;
var isFemale = false;
var nothingHere = undefined;
var nullHere = null;
var personNames = [];
// Dynamic and Static
var x = "abcd";
// x = 123; // Throws an error since variable x is a string
console.log(typeof (personName));
// Annotating types in an object
var person = { name: 'Peter', age: 45, isMale: true };
console.log(person);
var person2 = { name: 'Peter', age: 45, isMale: true };
console.log(person2);
// Union types
var nickName;
nickName = 'asdf';
nickName = person;
// nickName = true; // Throws an error since variable nickName is of type string or Person
console.log(nickName);
/* Functions */
var add = function (a, b) { return a + b; };
console.log(add(10, 2));
function multiply(a, b) {
    return a * b;
}
// Q1: Write TS function which takes Person object type as argument and print its details to console
// type Person = { name: string, age: number, isMale: boolean };
var person3 = { name: 'Pratik', age: 25, isMale: true };
var printPersonDetails = function (person) {
    console.log(person);
};
printPersonDetails(person3);
// console.log(person3);
