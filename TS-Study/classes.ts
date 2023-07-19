import { Animal } from "./animal";

/* Enum */
enum Gender {
    Male = "m",
    Female = "f",
    Others = "o"
}

/* Generics */
const wrapInt = (value: number): number[] => {
    return [value];
}

const wrapString = (value: string): string[] => {
    return [value];
}

const wrapBoolean = (value: boolean): boolean[] => {
    return [value];
}

console.log(wrapInt(10));
console.log(wrapString("Ten"));
console.log(wrapBoolean(true));

// Using a generic type
const wrapValue = <T>(value: T): T[] => {
    return [value];
}

console.log(wrapValue(10));
console.log(wrapValue<string>("Ten"));
console.log(wrapValue(true));

// Inheritance
class Mammal extends Animal {

}

// Instantiate
const dog = new Animal('Dog', 'Husky', 4);
dog.feed();

// const cat = new Animal();
// cat.isHuman = false;
// console.log(cat.isHuman);


