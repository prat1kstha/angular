// Basic types
// const, let, var
const personName: string = 'Bishnu';
const age: number = 23;
const isFemale: boolean = false;
const nothingHere: undefined = undefined;
const nothingHere1: null = null;
const personNames: string[] = ['sdfs', 'dsfsf'];

// Dynamic and static
let x: string = 'sdfsafda';
x = 'sdfadf afsdsfsfs';

type Person = { name: string, age: number, isMale: boolean };

const person: Person = { name: 'Peter', age: 45, isMale: true };

// Union types
let nickName: string | Person;

nickName = 'sdfsadfsd';
nickName = person;

// Functions
const add = (a: number, b: number): number => a + b;

function multiply(a: number, b: number) : number {
    return a * b;
}

// Q1: Write TS function which takes Person object type as argument and print its details to console
